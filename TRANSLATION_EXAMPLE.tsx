import { useTranslations } from 'next-intl';
import Container from "@/app/_components/container";
import Link from "next/link";

export default function GivingPage() {
  const t = useTranslations('giving');
  const tCommon = useTranslations('common');
  
  return (
    <main className="bg-white dark:bg-slate-900">
      <Container>
        <div className="py-16 px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-purple dark:text-gold mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t('subtitle')}
            </p>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              {t('description')}
            </p>
          </div>

          {/* Why Give Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-dark-purple dark:text-gold mb-8">
              {t('whyGive.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 dark:bg-slate-800 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-royal-purple dark:text-gold">
                  {t('whyGive.worship')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('whyGive.worshipDesc')}
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-slate-800 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-royal-purple dark:text-gold">
                  {t('whyGive.outreach')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('whyGive.outreachDesc')}
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-slate-800 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-royal-purple dark:text-gold">
                  {t('whyGive.growth')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('whyGive.growthDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="max-w-2xl mx-auto bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">
              {t('security.title')}
            </h3>
            <p className="text-green-700 dark:text-green-300">
              {t('security.description')}
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
