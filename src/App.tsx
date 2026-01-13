import { LanguageSwitcher } from "@/components/language-switcher";
import { ProfileSection } from "@/components/profile-section";
import { SocialLinks } from "@/components/social-links";
import { CryptoAddresses } from "@/components/crypto-addresses";
import { ProjectsSection } from "@/components/projects-section";
import { AdSense } from "@/components/adsense";
import { config } from "@/lib/config";
import packageJson from "@/../package.json";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background to-muted/20">
      <LanguageSwitcher />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <ProfileSection />
          <SocialLinks />
          <ProjectsSection />
          <AdSense
            adClient={config.adsense.client}
            adSlot="6292630851"
            className="my-6"
          />
          <CryptoAddresses />
          <AdSense
            adClient={config.adsense.client}
            adSlot="1922141004"
            className="my-6"
          />
          <footer className="mt-8 pt-6 text-center text-xs text-muted-foreground">
            <p>© 2026 Thomas Lin · v{packageJson.version}</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
