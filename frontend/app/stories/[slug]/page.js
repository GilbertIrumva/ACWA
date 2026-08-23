import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';
import PortableText from '../../../components/ui/PortableText';
import { getStoryBySlug } from '../../../lib/sanity/queries';
import { getImageUrl } from '../../../lib/sanity/client';
import { Calendar, User, MapPin, ArrowLeft } from 'lucide-react';

export async function generateMetadata({ params }) {
  const story = await getStoryBySlug(params.slug);
  if (!story) return { title: 'Story Not Found | ACWA' };
  return {
    title: `${story.title} | ACWA Stories`,
    description: story.excerpt,
  };
}

export default async function StoryDetailPage({ params }) {
  const story = await getStoryBySlug(params.slug);

  if (!story) {
    notFound();
  }

  const formattedDate = story.publishedAt
    ? new Date(story.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : '';

  const heroImageUrl = getImageUrl(story.featuredImage, '/_MG_2602.jpg');

  return (
    <article className="py-12 sm:py-20 space-y-12">
      {/* Header Banner */}
      <section className="bg-[#D5EBD9] dark:bg-[#064E3B]/90 py-12 border-b border-[#16A34A]/10 dark:border-emerald-700/40 transition-colors duration-200">
        <Container size="small">
          <Link
            href="/stories"
            className="inline-flex items-center text-xs font-semibold text-[#16A34A] dark:text-[#22C55E] hover:text-[#D87532] dark:hover:text-[#D87532] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            <span>Back to All Stories</span>
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
              <span className="bg-[#16A34A] dark:bg-[#042F20] text-[#F0FDF4] px-3 py-1 rounded-full uppercase tracking-wider border border-transparent dark:border-emerald-600/40">
                {story.category}
              </span>
              {formattedDate && (
                <span className="flex items-center space-x-1 text-[#4A5550] dark:text-[#D5EBD9]/80">
                  <Calendar className="w-3.5 h-3.5 text-[#A8875A] dark:text-[#D87532]" />
                  <span>{formattedDate}</span>
                </span>
              )}
              {story.location && (
                <span className="flex items-center space-x-1 text-[#4A5550] dark:text-[#D5EBD9]/80">
                  <MapPin className="w-3.5 h-3.5 text-[#A8875A] dark:text-[#D87532]" />
                  <span>{story.location}</span>
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#171A17] dark:text-[#F0FDF4] leading-tight">
              {story.title}
            </h1>

            <p className="text-lg text-[#4A5550] dark:text-[#D5EBD9]/90 italic border-l-4 border-[#A8875A] dark:border-[#D87532] pl-4 py-1 leading-relaxed">
              {story.excerpt}
            </p>

            <div className="flex items-center space-x-2 text-xs text-[#16A34A] dark:text-[#22C55E] pt-2">
              <User className="w-4 h-4 text-[#A8875A] dark:text-[#D87532]" />
              <span>Reported by <strong className="font-semibold">{story.author || 'ACWA Team'}</strong></span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Image */}
      {heroImageUrl && (
        <section>
          <Container size="small">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl bg-[#16A34A]">
              <img src={heroImageUrl} alt={story.title} className="w-full h-full object-cover" />
            </div>
          </Container>
        </section>
      )}

      {/* Body Content */}
      <section>
        <Container size="small">
          <PortableText value={story.body} className="text-[#171A17] dark:text-[#F0FDF4]" />

          {/* Photo Gallery if present */}
          {story.gallery && story.gallery.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#16A34A]/10 dark:border-emerald-800/40 space-y-4">
              <h3 className="font-serif font-bold text-xl text-[#171A17] dark:text-[#F0FDF4]">Field Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {story.gallery.map((galleryImg, imgIdx) => (
                  <div key={imgIdx} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#16A34A]">
                    <img
                      src={getImageUrl(galleryImg, '/_MG_2558.jpg')}
                      alt={`Gallery item ${imgIdx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Share & Return CTA */}
          <div className="mt-12 pt-8 border-t border-[#16A34A]/10 dark:border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/stories"
              className="inline-flex items-center text-sm font-semibold text-[#16A34A] dark:text-[#22C55E] hover:text-[#D87532]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Return to Field Stories</span>
            </Link>

            <Button href="/donate" variant="orange" size="md">
              Support ACWA Projects
            </Button>
          </div>
        </Container>
      </section>
    </article>
  );
}
