using System.ComponentModel.DataAnnotations;

namespace MadhaDentalAPI.Models
{
    public class News
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; } = "";

        public string Description { get; set; } = "";

        public string ImageUrl { get; set; } = "";

        public DateTime PublishedDate { get; set; }

        public bool IsActive { get; set; } = true;
    }
}