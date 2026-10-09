
using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetProjects()
    {
        var projects = new[]
        {
            new
            {
                Id = 1,
                Title = "LIA Management System",
                Description = "A full-stack application for managing internship workflows, user roles and administration.",
                Technologies = new[] { "React", "TypeScript", "ASP.NET Core", "EF Core", "SQL Server" },
                Category = "Full-stack development",
                GithubUrl = "https://github.com/fakhara/LIA.ManagementSystem"
            },
            new
            {
                Id = 2,
                Title = "RehapProgram",
                Description = "A patient-focused mobile application for exercise programs, progress tracking and pain reporting.",
                Technologies = new[] { "React Native", "Expo", "TypeScript", "Supabase" },
                Category = "Mobile development",
                GithubUrl = ""
            },
            new
            {
                Id = 3,
                Title = "CarSimulator",
                Description = "A learning project focused on unit testing and software quality using Azure DevOps.",
                Technologies = new[] { "C#", "Unit Testing", "Azure DevOps" },
                Category = "Testing and DevOps",
                GithubUrl = "https://dev.azure.com/fakhara-DevOps25/CarSimulator"
            }
        };

        return Ok(projects);
    }
}