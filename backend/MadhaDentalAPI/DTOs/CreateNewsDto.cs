using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace MadhaDentalAPI.DTOs;

public class CreateNewsDto
{
    [Required]
    public string Title { get; set; } = "";

    public string Description { get; set; } = "";

    [Required]
    public DateTime PublishedDate { get; set; }

    public IFormFile? Image { get; set; }
}