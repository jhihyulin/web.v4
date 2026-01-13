import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

interface Project {
  title: string;
  description: string;
  url?: string;
  github?: string;
  tags: string[];
}

export function ProjectsSection() {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: "saget.me",
      description: "Personal Website",
      url: "https://saget.me",
      github: "https://github.com/jhihyulin/web.v4",
      tags: ["Vite", "React", "TypeScript", "TailwindCSS"],
    },
    {
      title: "NDHU Blockchain Club Website",
      description: "Official Website of NDHU Blockchain Club.",
      url: "https://ndhublockchain.club",
      tags: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    },
    {
      title: "SuiStream",
      description: "Paid video streaming platform based on Sui Walrus & Seal.",
      url: "https://suistream.ndhublockchain.club",
      github: "https://github.com/ndhu-blockchain/SuiStream",
      tags: [
        "Sui",
        "Move",
        "Walrus",
        "Sui Seal",
        "Testnet",
        "Vite",
        "React",
        "TypeScript",
        "TailwindCSS",
      ],
    },
  ];

  return (
    <Card className="border-0 shadow-md bg-linear-to-br from-card to-card/50">
      <CardHeader>
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("sections.projects")}
        </h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 bg-muted/30 hover:bg-muted/50 shadow-sm transition-colors"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="ghost"
                        asChild
                        className="h-8 w-8 p-0"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <FaGithub className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.url && (
                      <Button
                        size="sm"
                        variant="ghost"
                        asChild
                        className="h-8 w-8 p-0"
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit"
                        >
                          <FaArrowUpRightFromSquare className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
