using Microsoft.AspNetCore.Mvc;
using MadhaDentalAPI.Data;
using MadhaDentalAPI.DTOs;
using Microsoft.EntityFrameworkCore;

namespace MadhaDentalAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public AuthController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto login)
    {
        var admin = await _context.AdminUsers.FirstOrDefaultAsync(x =>
            x.Username == login.Username &&
            x.Password == login.Password);

        if (admin == null)
            return Unauthorized(new
            {
                message = "Invalid username or password"
            });

        return Ok(new
        {
            message = "Login Successful"
        });
    }
}