using MadhaDentalAPI.Data;
using MadhaDentalAPI.DTOs;
using MadhaDentalAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MadhaDentalAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IWebHostEnvironment _environment;

    public NewsController(
        ApplicationDbContext context,
        IWebHostEnvironment environment)
    {
        _context = context;
        _environment = environment;
    }

    // GET: api/News
    [HttpGet]
    public async Task<IActionResult> GetNews()
    {
        var news = await _context.News
            .Where(x => x.IsActive)
            .OrderByDescending(x => x.PublishedDate)
            .ToListAsync();

        return Ok(news);
    }

    // GET: api/News/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetNewsById(int id)
    {
        var news = await _context.News
            .FirstOrDefaultAsync(x => x.Id == id);

        if (news == null)
        {
            return NotFound(new
            {
                message = "News not found"
            });
        }

        return Ok(news);
    }

    // POST: api/News
    [HttpPost]
    [Consumes("multipart/form-data")]
    public async Task<IActionResult> CreateNews(
        [FromForm] CreateNewsDto dto)
    {
        string imageUrl = "";

        if (dto.Image != null && dto.Image.Length > 0)
        {
            imageUrl = await SaveImage(dto.Image);
        }

        var news = new News
        {
            Title = dto.Title,
            Description = dto.Description,
            ImageUrl = imageUrl,
            PublishedDate = dto.PublishedDate,
            IsActive = true
        };

        _context.News.Add(news);

        await _context.SaveChangesAsync();

        return Ok(new
        {
            message = "News created successfully",
            news
        });
    }

    // PUT: api/News/5
    [HttpPut("{id}")]
    [Consumes("multipart/form-data")]
    public async Task<IActionResult> UpdateNews(
        int id,
        [FromForm] CreateNewsDto dto)
    {
        var news = await _context.News
            .FirstOrDefaultAsync(x => x.Id == id);

        if (news == null)
        {
            return NotFound(new
            {
                message = "News not found"
            });
        }

        news.Title = dto.Title;
        news.Description = dto.Description;
        news.PublishedDate = dto.PublishedDate;

        if (dto.Image != null && dto.Image.Length > 0)
        {
            DeleteImage(news.ImageUrl);

            news.ImageUrl = await SaveImage(dto.Image);
        }

        await _context.SaveChangesAsync();

        return Ok(new
        {
            message = "News updated successfully",
            news
        });
    }

    // DELETE: api/News/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteNews(int id)
    {
        var news = await _context.News
            .FirstOrDefaultAsync(x => x.Id == id);

        if (news == null)
        {
            return NotFound(new
            {
                message = "News not found"
            });
        }

        DeleteImage(news.ImageUrl);

        _context.News.Remove(news);

        await _context.SaveChangesAsync();

        return Ok(new
        {
            message = "News deleted successfully"
        });
    }

    // ==============================
    // SAVE IMAGE
    // ==============================

    private async Task<string> SaveImage(IFormFile image)
    {
        var webRootPath = _environment.WebRootPath;

        if (string.IsNullOrWhiteSpace(webRootPath))
        {
            webRootPath = Path.Combine(
                Directory.GetCurrentDirectory(),
                "wwwroot"
            );
        }

        var uploadsFolder = Path.Combine(
            webRootPath,
            "uploads",
            "news"
        );

        if (!Directory.Exists(uploadsFolder))
        {
            Directory.CreateDirectory(uploadsFolder);
        }

        var extension = Path.GetExtension(image.FileName);

        var fileName =
            $"{Guid.NewGuid()}{extension}";

        var filePath = Path.Combine(
            uploadsFolder,
            fileName
        );

        await using var stream = new FileStream(
            filePath,
            FileMode.Create
        );

        await image.CopyToAsync(stream);

        return $"/uploads/news/{fileName}";
    }

    // ==============================
    // DELETE IMAGE
    // ==============================

    private void DeleteImage(string? imageUrl)
    {
        if (string.IsNullOrWhiteSpace(imageUrl))
            return;

        var webRootPath = _environment.WebRootPath;

        if (string.IsNullOrWhiteSpace(webRootPath))
        {
            webRootPath = Path.Combine(
                Directory.GetCurrentDirectory(),
                "wwwroot"
            );
        }

        var relativePath = imageUrl
            .TrimStart('/')
            .Replace(
                "/",
                Path.DirectorySeparatorChar.ToString()
            );

        var filePath = Path.Combine(
            webRootPath,
            relativePath
        );

        if (System.IO.File.Exists(filePath))
        {
            System.IO.File.Delete(filePath);
        }
    }
}