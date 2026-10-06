using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Mvc;
using MimeKit;

namespace MadhaDentalAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdmissionEnquiryController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public AdmissionEnquiryController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("send")]
        public async Task<IActionResult> Send(
            [FromBody] AdmissionEnquiryRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Name) ||
                string.IsNullOrWhiteSpace(request.Phone) ||
                string.IsNullOrWhiteSpace(request.Email) ||
                string.IsNullOrWhiteSpace(request.Course))
            {
                return BadRequest(new
                {
                    success = false,
                    message = "Please fill all required fields."
                });
            }

            try
            {
                var smtpHost =
                    _configuration["Email:SmtpHost"]
                    ?? throw new InvalidOperationException("SMTP host is missing.");

                var smtpPort =
                    int.TryParse(_configuration["Email:SmtpPort"], out var port)
                        ? port
                        : 465;

                var smtpUsername =
                    _configuration["Email:Username"]
                    ?? throw new InvalidOperationException("Email username is missing.");

                var smtpPassword =
                    _configuration["Email:Password"]
                    ?? throw new InvalidOperationException("Email password is missing.");

                var fromEmail =
                    _configuration["Email:From"]
                    ?? smtpUsername;

                var toEmail =
                    _configuration["Email:To"]
                    ?? throw new InvalidOperationException("Recipient email is missing.");

                var email = new MimeMessage();

                email.From.Add(
                    new MailboxAddress(
                        "Madha Dental College Website",
                        fromEmail
                    )
                );

                email.To.Add(
                    new MailboxAddress(
                        "Admission Enquiry",
                        toEmail
                    )
                );

                email.ReplyTo.Add(
                    new MailboxAddress(
                        request.Name,
                        request.Email
                    )
                );

                email.Subject =
                    $"New Admission Enquiry - {request.Name}";

                email.Body = new TextPart("plain")
                {
                    Text = $"""
                    NEW ADMISSION ENQUIRY
                    =====================

                    Name   : {request.Name}
                    Phone  : {request.Phone}
                    Email  : {request.Email}
                    Course : {request.Course}

                    Message:
                    {request.Message}

                    =====================
                    Source: Madha Dental College Website
                    """
                };

                using var smtp = new SmtpClient();

                // Hostinger SMTP - SSL on port 465
                await smtp.ConnectAsync(
                    smtpHost,
                    smtpPort,
            SecureSocketOptions.StartTls
                );

                await smtp.AuthenticateAsync(
                    smtpUsername,
                    smtpPassword
                );

                await smtp.SendAsync(email);

                await smtp.DisconnectAsync(true);

                return Ok(new
                {
                    success = true,
                    message = "Enquiry sent successfully."
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine(
                    $"Admission enquiry email error: {ex}"
                );

                return StatusCode(500, new
                {
                    success = false,
                    message = "Unable to send enquiry email."
                });
            }
        }
    }

    public class AdmissionEnquiryRequest
    {
        public string Name { get; set; } = "";
        public string Phone { get; set; } = "";
        public string Email { get; set; } = "";
        public string Course { get; set; } = "";
        public string Message { get; set; } = "";
    }
}