import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProfileSection() {
  const { t } = useTranslation();
  const ids = (t("ids", { returnObjects: true }) as string[]) || [];
  const languages = t("languages");
  const location = t("location");
  const subtitle = t("subtitle");

  return (
    <Card className="overflow-hidden border-0 shadow-md bg-linear-to-br from-card to-card/50">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <img
            src="/avatar.jpg"
            alt={t("ui.profileAvatar")}
            className="w-20 h-20 rounded-full object-cover shadow-lg"
          />
          <div className="space-y-1 flex-1">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("name.english")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t("name.legal_zh")}
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              {t("name.legal_en")}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-lg font-semibold">{t("title")}</p>
            <p className="text-muted-foreground">
              {subtitle.includes("NDHU") ? (
                <>
                  Physics Student at{" "}
                  <a
                    href="https://www.ndhu.edu.tw/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline font-medium text-foreground"
                  >
                    NDHU
                  </a>
                </>
              ) : (
                subtitle
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {ids.map((id: string) => (
              <Badge key={id} variant="secondary">
                {id}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {location && (
              <a
                href="https://www.google.com/maps/place/Taiwan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <Badge variant="secondary" className="bg-muted/60">
                  📍 {location}
                </Badge>
              </a>
            )}
            {languages && (
              <Badge variant="secondary" className="bg-muted/60">
                🌍 {languages}
              </Badge>
            )}
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {t("bio")}
        </p>
      </CardContent>
    </Card>
  );
}
