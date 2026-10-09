

import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import PsychologyIcon from "@mui/icons-material/Psychology";

import { useEffect, useState } from "react";
import { getApiHealth, type HealthResponse } from "./services/api";
import { getProjects, type Project } from "./services/projectsApi";

import "./App.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#60a5fa" },
    background: {
      default: "#0b1120",
      paper: "#111b2e",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
  },
});

const skills = [
  "C#",
  ".NET 10",
  "ASP.NET Core",
  "React",
  "TypeScript",
  "JavaScript",
  "SQL Server",
  "Entity Framework Core",
  "REST APIs",
  "Git",
  "Azure DevOps",
  "AI & Machine Learning",
];

function App() {
  const [apiHealth, setApiHealth] = useState<HealthResponse | null>(null);
  const [apiError, setApiError] = useState("");

  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [projectsError, setProjectsError] = useState("");

  useEffect(() => {
    getApiHealth()
      .then(setApiHealth)
      .catch((error) => {
        console.error("API connection failed:", error);
        setApiError("API connection unavailable");
      });
  }, []);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Failed to load projects:", error);
        setProjectsError(
          "Unable to load projects. Please try again later."
        );
      })
      .finally(() => {
        setLoadingProjects(false);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box className="portfolio">
        {/* Navigation */}
        <AppBar position="sticky" elevation={0} className="navbar">
          <Container maxWidth="lg">
            <Toolbar disableGutters className="toolbar">
              <Typography className="brand">
                FI<span>.</span>
              </Typography>

              <Stack
                direction="row"
                spacing={{ xs: 1.5, sm: 3 }}
                sx={{ alignItems: "center" }}
              >
                <Button href="#about" color="inherit">
                  About
                </Button>

                <Button href="#skills" color="inherit">
                  Skills
                </Button>

                <Button href="#projects" color="inherit">
                  Projects
                </Button>

                <Button href="#contact" variant="contained">
                  Contact
                </Button>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>

        <Container maxWidth="lg">
          <Box component="main">
            {/* Hero */}
            <Box component="section" className="hero" id="home">
              <Chip
                label="FULLSTACK DEVELOPER · OPEN TO OPPORTUNITIES"
                variant="outlined"
                className="hero-badge"
              />

              <Typography className="hero-greeting">
                Hello, I'm
              </Typography>

              <Typography component="h1" className="hero-title">
                Fakhara Imran<span>.</span>
              </Typography>

              <Typography className="hero-subtitle">
                Building reliable digital products with{" "}
                <span>C# .NET</span> and <span>React</span>.
              </Typography>

              <Typography className="hero-description">
                Full-stack developer passionate about clean code,
                thoughtful user experiences and practical software
                solutions. I enjoy turning ideas into useful applications
                and continuously improving my engineering skills.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                className="hero-actions"
              >
                <Button
                  variant="contained"
                  size="large"
                  href="#projects"
                  endIcon={<ArrowOutwardIcon />}
                >
                  Explore my work
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="#contact"
                >
                  Get in touch
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                className="social-links"
              >
                <IconButton
                  aria-label="GitHub"
                  component="a"
                  href="https://github.com/fakhara"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </IconButton>

                <IconButton
                  aria-label="LinkedIn"
                  component="a"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </IconButton>
              </Stack>

              <Box className="hero-orb" aria-hidden="true" />
            </Box>

            {/* About */}
            <Box component="section" id="about" className="section">
              <Typography className="eyebrow">
                01 / ABOUT ME
              </Typography>

              <Typography component="h2" className="section-title">
                Technology with purpose.
              </Typography>

              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 7 }}>
                  <Typography className="body-copy">
                    I'm a full-stack developer with a background in
                    Information Technology and vocational training in
                    .NET development with AI competencies. My interests
                    include backend architecture, API development,
                    database design and modern frontend experiences.
                  </Typography>

                  <Typography className="body-copy">
                    Through practical projects, I build my experience
                    across the full development lifecycle—from planning
                    and implementation to testing and improvement.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 5 }}>
                  <Box className="info-card">
                    <Typography className="info-label">
                      FOCUS
                    </Typography>

                    <Typography>
                      Full-stack development
                    </Typography>

                    <Typography className="info-label">
                      BACKEND
                    </Typography>

                    <Typography>
                      C# · ASP.NET Core · SQL
                    </Typography>

                    <Typography className="info-label">
                      FRONTEND
                    </Typography>

                    <Typography>
                      React · TypeScript · Material UI
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Skills */}
            <Box component="section" id="skills" className="section">
              <Typography className="eyebrow">
                02 / TECH STACK
              </Typography>

              <Typography component="h2" className="section-title">
                Tools I work with.
              </Typography>

              <Typography className="body-copy section-intro">
                Technologies I've used in my studies and projects.
              </Typography>

              <Stack
                direction="row"
                sx={{
                  flexWrap: "wrap",
                  gap: 1.25,
                }}
              >
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    className="skill-chip"
                  />
                ))}
              </Stack>
            </Box>

            {/* Projects loaded from ASP.NET Core API */}
            <Box component="section" id="projects" className="section">
              <Typography className="eyebrow">
                03 / SELECTED WORK
              </Typography>

              <Typography component="h2" className="section-title">
                Projects that bring ideas to life.
              </Typography>

              <Typography className="body-copy section-intro">
                A selection of projects demonstrating my work across
                web, mobile and software testing.
              </Typography>

              {loadingProjects ? (
                <Typography>
                  Loading projects...
                </Typography>
              ) : projectsError ? (
                <Typography color="error">
                  {projectsError}
                </Typography>
              ) : projects.length === 0 ? (
                <Typography>
                  No projects found.
                </Typography>
              ) : (
                <Grid container spacing={2.5}>
                  {projects.map((project) => (
                    <Grid
                      key={project.id}
                      size={{ xs: 12, md: 4 }}
                    >
                      <Box className="project-card">
                        <Stack
                          direction="row"
                          sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box className="project-icon">
                            {project.category ===
                            "Full-stack development" ? (
                              <StorageIcon />
                            ) : project.category ===
                              "Mobile development" ? (
                              <CodeIcon />
                            ) : (
                              <PsychologyIcon />
                            )}
                          </Box>

                          <Typography className="project-number">
                            {String(project.id).padStart(2, "0")}
                          </Typography>
                        </Stack>

                        <Typography className="project-status">
                          {project.category}
                        </Typography>

                        <Typography
                          component="h3"
                          className="project-title"
                        >
                          {project.title}
                        </Typography>

                        <Typography className="project-description">
                          {project.description}
                        </Typography>

                        <Stack
                          direction="row"
                          sx={{
                            flexWrap: "wrap",
                            gap: 0.75,
                          }}
                        >
                          {project.technologies.map((technology) => (
                            <Chip
                              key={technology}
                              label={technology}
                              size="small"
                              className="project-tech"
                            />
                          ))}
                        </Stack>

                        {project.githubUrl && (
                          <Button
                            component="a"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            endIcon={<ArrowOutwardIcon />}
                            sx={{ mt: 2 }}
                          >
                            View project
                          </Button>
                        )}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>

            {/* Contact */}
            <Box
              component="section"
              id="contact"
              className="contact-section"
            >
              <Typography className="eyebrow">
                04 / CONTACT
              </Typography>

              <Typography component="h2" className="section-title">
                Let's build something useful.
              </Typography>

              <Typography className="body-copy">
                Interested in working together or discussing a software
                development opportunity? I'd be happy to connect.
              </Typography>

              <Button
                variant="contained"
                size="large"
                href="mailto:YOUR_EMAIL@example.com"
                endIcon={<ArrowOutwardIcon />}
                sx={{ mt: 3 }}
              >
                Email me
              </Button>
            </Box>
          </Box>

          {/* API status */}
          <Box sx={{ py: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Backend status:{" "}
              {apiHealth
                ? `${apiHealth.status} — ${apiHealth.message}`
                : apiError || "Connecting to API..."}
            </Typography>
          </Box>

          {/* Footer */}
          <Box component="footer" className="footer">
            <Typography>
              © {new Date().getFullYear()} Fakhara Imran · Built with
              React and TypeScript
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;