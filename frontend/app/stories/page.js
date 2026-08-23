import React from 'react';
import Link from 'next/link';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import { getStories } from '../../lib/sanity/queries';
import { getImageUrl } from '../../lib/sanity/client';
import { User, MapPin, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Stories & Field News | ACWA Kenya',
  description:
    'Read stories of hope, peace dialogues, and community permaculture from Kakuma Refugee Camp and host communities.',
};

export default async function StoriesPage() {
  const stories = await getStories();
  const featuredStory = stories.find((s) => s.featured) || stories[0];
  const regularStories = stories.filter((s) => s._id !== featuredStory?._id);

  return (
    <div className="py-12 sm:py-20 space-y-16">
      <section className="relative overflow-hidden py-20 sm:py-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/IMG_20260113_180100_323.jpg"
            alt="Field dispatches and news from Kakuma"
            className="w-full h-full object-cover object-center brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 z-10" />
        </div>

        <Container className="relative z-20">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-xs font-bold text-[#D87532] uppercase tracking-wider block bg-[#16A34A] px-3.5 py-1.5 rounded-full w-max border border-[#22C55E]/40">
              Field Dispatch & News
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
              Stories from Kakuma
            </h1>
            <p className="text-lg text-[#D5EBD9] leading-relaxed">
              Human-centered reports documenting grassroots peacebuilding, permaculture harvests, child welfare, and community resilience.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          {/* Featured Story */}
          {featuredStory && (
            <div className="mb-16 bg-[#16A34A] text-[#F0FDF4] rounded-3xl overflow-hidden shadow-xl border border-[#16A34A] grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto relative bg-[#22C55E]">
                <img
                  src={getImageUrl(featuredStory.featuredImage, '/_MG_2602.jpg')}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-xs text-[#A8875A]">
                    <span className="bg-[#22C55E] text-[#F0FDF4] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      Featured Story
                    </span>
                    <span>{featuredStory.category}</span>
                  </div>

                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#F0FDF4] leading-snug">
                    {featuredStory.title}
                  </h2>

                  <p className="text-sm text-[#D5EBD9]/80 leading-relaxed">{featuredStory.excerpt}</p>
                </div>

                <div className="pt-4 border-t border-[#22C55E] flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-[#D5EBD9]/70">
                    <User className="w-3.5 h-3.5 text-[#A8875A]" />
                    <span>{featuredStory.author}</span>
                  </div>

                  <Link
                    href={`/stories/${featuredStory.slug?.current || featuredStory.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-[#A8875A] hover:text-[#F0FDF4] transition-colors"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Stories */}
          <SectionHeading badge="Latest Updates" title="More Field Dispatches" className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStories.map((story) => (
              <article
                key={story._id}
                className="bg-[#F0FDF4] dark:bg-[#064E3B]/90 rounded-3xl overflow-hidden border border-[#16A34A]/15 dark:border-emerald-700/40 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-[#16A34A]">
                    <img
                      src={getImageUrl(story.featuredImage, '/_MG_2558.jpg')}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-[#F0FDF4]/90 dark:bg-[#042F20]/90 text-[#16A34A] dark:text-[#22C55E] text-xs font-semibold px-3 py-1 rounded-full">
                      {story.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif font-bold text-xl text-[#171A17] dark:text-[#F0FDF4] hover:text-[#16A34A] dark:hover:text-[#22C55E] transition-colors">
                      <Link href={`/stories/${story.slug?.current || story.slug}`}>{story.title}</Link>
                    </h3>
                    <p className="text-xs text-[#4A5550] dark:text-[#D5EBD9]/85 leading-relaxed line-clamp-3">{story.excerpt}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#16A34A]/10 dark:border-emerald-800/40 mt-4 flex items-center justify-between text-xs text-[#4A5550] dark:text-[#D5EBD9]/80">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-[#A8875A] dark:text-[#D87532]" />
                    <span className="truncate max-w-[140px]">{story.location}</span>
                  </span>
                  <Link
                    href={`/stories/${story.slug?.current || story.slug}`}
                    className="font-semibold text-[#16A34A] dark:text-[#22C55E] hover:text-[#D87532] transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
