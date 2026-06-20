import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background text-on-surface antialiased pb-24 select-none pointer-events-none">
      {/* Inline styles for custom shimmer animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer-sweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .skeleton-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.02) 25%,
            rgba(255, 255, 255, 0.08) 50%,
            rgba(255, 255, 255, 0.02) 75%
          );
          background-size: 200% 100%;
          animation: shimmer-sweep 2s infinite linear;
        }
        .skeleton-shimmer-dim {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.01) 25%,
            rgba(255, 255, 255, 0.04) 50%,
            rgba(255, 255, 255, 0.01) 75%
          );
          background-size: 200% 100%;
          animation: shimmer-sweep 2s infinite linear;
        }
      `}} />

      {/* Header Skeleton */}
      <header className="py-8 border-b border-glass-edge/40">
        <div className="max-w-container-max mx-auto px-6 md:px-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white/5 rounded-full skeleton-shimmer" />
            <div className="w-24 h-4 bg-white/5 rounded skeleton-shimmer" />
          </div>
          <div className="w-28 h-4 bg-white/5 rounded skeleton-shimmer" />
        </div>
      </header>

      {/* Ticker Bar Skeleton */}
      <div className="w-full bg-white/[0.01] border-y border-glass-edge/30 py-3.5">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
          <div className="w-3/4 h-3 bg-white/5 rounded skeleton-shimmer-dim" />
        </div>
      </div>

      {/* Main Container */}
      <main className="pt-8 pb-16 md:pt-10 md:pb-24">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
          
          {/* Header & Filter Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            
            {/* Left Column: Page Title Skeleton */}
            <div className="lg:col-span-7 flex flex-col justify-center gap-4">
              <div className="space-y-2">
                <div className="w-28 h-3 bg-white/5 rounded skeleton-shimmer" />
                <div className="w-64 md:w-96 h-12 bg-white/5 rounded-lg skeleton-shimmer" />
              </div>
              <div className="space-y-2 mt-2">
                <div className="w-full h-3 bg-white/5 rounded skeleton-shimmer-dim" />
                <div className="w-11/12 h-3 bg-white/5 rounded skeleton-shimmer-dim" />
              </div>
              
              {/* Notice Box Skeleton */}
              <div className="mt-4 p-4 rounded-xl border border-glass-edge/40 bg-white/[0.01] flex gap-3 items-start">
                <div className="w-12 h-5 bg-white/5 rounded skeleton-shimmer shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="w-full h-2.5 bg-white/5 rounded skeleton-shimmer-dim" />
                  <div className="w-4/5 h-2.5 bg-white/5 rounded skeleton-shimmer-dim" />
                </div>
              </div>
            </div>

            {/* Right Column: Filter Panel Skeleton */}
            <div className="lg:col-span-5 w-full">
              <div className="p-6 rounded-2xl border border-glass-edge/40 bg-white/[0.01] w-full space-y-5">
                <div className="flex items-center justify-between border-b border-glass-edge/20 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white/5 rounded skeleton-shimmer" />
                    <div className="w-28 h-4 bg-white/5 rounded skeleton-shimmer" />
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Filter item 1 */}
                  <div className="space-y-2">
                    <div className="w-24 h-3 bg-white/5 rounded skeleton-shimmer-dim" />
                    <div className="w-full h-9 bg-white/5 border border-glass-edge/30 rounded-xl skeleton-shimmer" />
                  </div>
                  {/* Filter item 2 */}
                  <div className="space-y-2">
                    <div className="w-28 h-3 bg-white/5 rounded skeleton-shimmer-dim" />
                    <div className="w-full h-9 bg-white/5 border border-glass-edge/30 rounded-xl skeleton-shimmer" />
                  </div>
                  {/* Filter item 3 */}
                  <div className="space-y-2">
                    <div className="w-24 h-3 bg-white/5 rounded skeleton-shimmer-dim" />
                    <div className="w-full h-9 bg-white/5 border border-glass-edge/30 rounded-xl skeleton-shimmer" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Cards Grid Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full">
            
            {/* Card 1 */}
            <div className="glass-card rounded-2xl border border-glass-edge/40 overflow-hidden flex flex-col justify-between w-full h-[530px]">
              <div className="aspect-[16/9] w-full bg-white/5 border-b border-glass-edge/20 skeleton-shimmer" />
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between gap-4">
                <div className="space-y-4">
                  <div className="w-32 h-3 bg-white/5 rounded skeleton-shimmer-dim" />
                  <div className="w-4/5 h-6 bg-white/5 rounded-lg skeleton-shimmer" />
                  <div className="space-y-2 pt-2">
                    <div className="w-full h-3 bg-white/5 rounded skeleton-shimmer-dim" />
                    <div className="w-11/12 h-3 bg-white/5 rounded skeleton-shimmer-dim" />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <div className="w-16 h-5 bg-white/5 rounded skeleton-shimmer" />
                    <div className="w-20 h-5 bg-white/5 rounded skeleton-shimmer" />
                    <div className="w-14 h-5 bg-white/5 rounded skeleton-shimmer" />
                  </div>
                </div>
                <div className="w-full h-10 bg-white/5 border border-glass-edge/40 rounded-xl skeleton-shimmer" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card rounded-2xl border border-glass-edge/40 overflow-hidden flex flex-col justify-between w-full h-[530px]">
              <div className="aspect-[16/9] w-full bg-white/5 border-b border-glass-edge/20 skeleton-shimmer" />
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between gap-4">
                <div className="space-y-4">
                  <div className="w-32 h-3 bg-white/5 rounded skeleton-shimmer-dim" />
                  <div className="w-3/5 h-6 bg-white/5 rounded-lg skeleton-shimmer" />
                  <div className="space-y-2 pt-2">
                    <div className="w-full h-3 bg-white/5 rounded skeleton-shimmer-dim" />
                    <div className="w-5/6 h-3 bg-white/5 rounded skeleton-shimmer-dim" />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <div className="w-14 h-5 bg-white/5 rounded skeleton-shimmer" />
                    <div className="w-18 h-5 bg-white/5 rounded skeleton-shimmer" />
                    <div className="w-24 h-5 bg-white/5 rounded skeleton-shimmer" />
                  </div>
                </div>
                <div className="w-full h-10 bg-white/5 border border-glass-edge/40 rounded-xl skeleton-shimmer" />
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
