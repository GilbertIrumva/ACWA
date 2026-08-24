import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/ui/Container';
import PortableText from '../../../components/ui/PortableText';
import { getStoryBySlug } from '../../../lib/sanity/queries';
import { getImageUrl } from '../../../lib/sanity/client';
import { Calendar, User, MapPin, ArrowLeft, ArrowRight } from 'lucide-react';

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
    <article className="py-10 sm:py-16 space-y-12">
      {/* Header Banner */}
      <section className="bg-[#F9FAFB] dark:bg-[#042F20] py-12 border-b border-gray-200 dark:border-emerald-800/40 transition-colors duration-200">
        <Container size="small">
          <Link
            href="/stories"
            className="inline-flex items-center text-xs font-bold text-[#2E7D32] dark:text-[#4CAF50] hover:text-[#1B5E20] transition-colors mb-6 uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            <span>Back to All Field Stories</span>
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <span className="bg-[#1B5E20] text-white px-3 py-1 uppercase tracking-wider">
                {story.category}
              </span>
              {formattedDate && (
                <span className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                  <Calendar className="w-3.5 h-3.5 text-[#2E7D32] dark:text-[#4CAF50]" />
                  <span>{formattedDate}</span>
                </span>
              )}
              {story.location && (
                <span className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-[#2E7D32] dark:text-[#4CAF50]" />
                  <span>{story.location}</span>
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {story.title}
            </h1>

            <div className="border-l-4 border-[#2E7D32] dark:border-[#4CAF50] pl-6 py-1">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                {story.excerpt}
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs text-[#2E7D32] dark:text-[#4CAF50] pt-2 font-semibold">
              <User className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50]" />
              <span>Reported by <strong className="font-bold">{story.author || 'ACWA Communications Team'}</strong></span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Feature Image */}
      {heroImageUrl && (
        <section>
          <Container size="small">
            <div className="relative aspect-[16/9] rounded-none overflow-hidden shadow-md border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] bg-gray-100">
              <img src={heroImageUrl} alt={story.title} className="w-full h-full object-cover" />
            </div>
          </Container>
        </section>
      )}

      {/* Story Text Body */}
      <section>
        <Container size="small">
          <PortableText value={story.body} className="text-gray-800 dark:text-gray-200 leading-relaxed text-base space-y-6 font-normal" />

          {/* Inline Photo Gallery */}
          {story.gallery && story.gallery.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-emerald-800/40 space-y-6">
              <h3 className="font-serif font-bold text-2xl text-gray-900 dark:text-white">Field Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {story.gallery.map((galleryImg, imgIdx) => (
                  <div key={imgIdx} className="relative aspect-[4/3] border border-gray-200 dark:border-emerald-800/40 border-t-4 border-t-[#2E7D32] overflow-hidden bg-gray-100 shadow-sm">
                    <img
                      src={getImageUrl(galleryImg, '/_MG_2558.jpg')}
                      alt={`Field photo ${imgIdx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Navigation & CTA */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/stories"
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#2E7D32] dark:text-[#4CAF50] hover:text-[#1B5E20]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Return to Field Stories</span>
            </Link>

            <Link
              href="/donate"
              className="inline-flex items-center px-7 py-3.5 bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-extrabold text-xs uppercase tracking-wider rounded-none transition-colors shadow-md group"
            >
              <span>Support ACWA Projects</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
