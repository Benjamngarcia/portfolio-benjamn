import {
  Box,
  Grid,
  Typography,
  CardMedia,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import { IconCaretRight } from "@tabler/icons-react";
import { IconFolderFilled } from "@tabler/icons-react";
import { ButtonLink } from "../Buttons/ButtonLink";
import { CustomChip } from "../common/CustomChip";

export function ProjectsCard({ project, isPortfolio }) {
  return isPortfolio ? (
    <Card sx={{ maxWidth: 300, height: "100%", borderRadius: "4px" }}>
      <CardMedia
        component="img"
        alt={project.description}
        height="140"
        image={project.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5" color="primary">
          {project.title}
        </Typography>
        <Typography variant="typoEllipsis" color="text.secondary">
          {project.description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {project.technologies.slice(0, 3).map((tech) => {
            return <CustomChip tech={tech} key={tech} />;
          })}
        </Box>
      </CardContent>
      <CardActions>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ButtonLink
              variant="contained"
              color="secondary"
              size="medium"
              href={project.demo}
              iconComponent={<IconCaretRight />}
              iconCenter
              textButton="Demo"
              disabled={!project.demo}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ButtonLink
              variant="contained"
              color="secondary"
              size="medium"
              href={project.repo}
              iconComponent={<IconFolderFilled />}
              iconCenter
              textButton="Repo"
              disabled={!project.repo}
            />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  ) : (
    <Card
      sx={{
        height: "100%",
        borderRadius: "4px",
        width: "100%",
        marginTop: "16px",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Grid item xs={12} md={7}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h5"
              color="dark"
            >
              {project.title}
            </Typography>
            <Box sx={{ marginTop: "8px" }}>
              {project.technologies.slice(0, 3).map((tech) => {
                return <CustomChip tech={tech} key={tech} isBigger />;
              })}
            </Box>
            <Typography variant="typoEllipsis" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container spacing={2} sx={{ padding: "0px 16px" }}>
              <Grid item xs={12} sm={6}>
                <ButtonLink
                  variant="contained"
                  color="secondary"
                  size="medium"
                  href={project.demo}
                  iconComponent={<IconCaretRight />}
                  iconCenter
                  textButton="Demo"
                  disabled={!project.demo}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ButtonLink
                  variant="contained"
                  color="secondary"
                  size="medium"
                  href={project.repo}
                  iconComponent={<IconFolderFilled />}
                  iconCenter
                  textButton="Repo"
                />
              </Grid>
            </Grid>
          </CardActions>
        </Grid>
        <Grid item xs={12} md={5}>
          <CardMedia
            component="img"
            alt={project.description}
            image={project.img}
            sx={{ borderRadius: "4px" }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
