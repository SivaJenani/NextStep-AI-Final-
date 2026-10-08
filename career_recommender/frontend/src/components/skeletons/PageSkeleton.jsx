/*
  Shared skeleton placeholders for initial-fetch loading states.
  Each component uses Tailwind animate-pulse and matches the card-panel
  visual style so the transition from skeleton to real content is seamless.
*/

export function SkeletonText({ width = "full", height = "h-4", className = "" }) {
  return <div className={`animate-pulse rounded bg-slate-200 ${height} w-${width} ${className}`} />;
}

export function SkeletonCard({ children, className = "" }) {
  return (
    <div className={`animate-pulse rounded-3xl border border-slate-200 bg-white p-5 ${className}`}>
      {children}
    </div>
  );
}

export function SkeletonStatCard() {
  return (
    <SkeletonCard>
      <SkeletonText width="24" height="h-3" />
      <SkeletonText width="16" height="h-8" className="mt-4" />
    </SkeletonCard>
  );
}

export function SkeletonStatGrid({ count = 4 }) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonStatCard key={`stat-${i}`} />
      ))}
    </section>
  );
}

export function SkeletonTimeline({ items = 3 }) {
  return (
    <div className="space-y-5">
      {Array.from({ length: items }).map((_, i) => (
        <SkeletonCard key={`timeline-${i}`}>
          <div className="flex gap-4">
            <div className="h-12 w-12 shrink-0 rounded-full bg-slate-200" />
            <div className="flex-1 space-y-3">
              <SkeletonText width="48" height="h-6" />
              <SkeletonText width="full" height="h-4" />
              <SkeletonText width="3/4" height="h-4" />
            </div>
          </div>
        </SkeletonCard>
      ))}
    </div>
  );
}

export function SkeletonForm({ fields = 6 }) {
  return (
    <div className="space-y-5">
      {Array.from({ length: fields }).map((_, i) => (
        <div key={`field-${i}`} className={i === 0 ? "lg:col-span-2" : ""}>
          <SkeletonText width="24" height="h-4" className="mb-2" />
          <SkeletonText width="full" height="h-12" />
        </div>
      ))}
      <SkeletonText width="32" height="h-12" />
    </div>
  );
}

export function SkeletonJobCard() {
  return (
    <SkeletonCard>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          <SkeletonText width="48" height="h-6" />
          <SkeletonText width="32" height="h-4" />
          <SkeletonText width="full" height="h-4" />
        </div>
        <SkeletonText width="20" height="h-8" />
      </div>
    </SkeletonCard>
  );
}

export function SkeletonJobList({ count = 3 }) {
  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonJobCard key={`job-${i}`} />
      ))}
    </div>
  );
}

export function SkeletonBookmarkCard() {
  return (
    <SkeletonCard>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1 space-y-3">
          <SkeletonText width="48" height="h-6" />
          <SkeletonText width="32" height="h-4" />
        </div>
        <SkeletonText width="32" height="h-10" />
      </div>
    </SkeletonCard>
  );
}

export function SkeletonBookmarkList({ count = 3 }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonBookmarkCard key={`bookmark-${i}`} />
      ))}
    </div>
  );
}

export function SkeletonSkillPanel() {
  return (
    <SkeletonCard>
      <SkeletonText width="32" height="h-3" />
      <div className="mt-4 flex flex-wrap gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonText key={`chip-${i}`} width="16" height="h-8" className="rounded-xl" />
        ))}
      </div>
    </SkeletonCard>
  );
}

export function SkeletonCompanyPanel() {
  return (
    <SkeletonCard>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          <SkeletonText width="40" height="h-5" />
          <SkeletonText width="24" height="h-4" />
        </div>
        <SkeletonText width="16" height="h-8" />
      </div>
      <div className="mt-4 space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={`company-${i}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <SkeletonText width="32" height="h-4" />
                <SkeletonText width="24" height="h-3" />
              </div>
              <SkeletonText width="20" height="h-8" />
            </div>
          </div>
        ))}
      </div>
    </SkeletonCard>
  );
}

export function SkeletonUploadForm() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={`file-${i}`}>
            <SkeletonText width="24" height="h-4" className="mb-2" />
            <SkeletonText width="full" height="h-12" />
          </div>
        ))}
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.4fr_auto_auto]">
        <SkeletonText width="full" height="h-12" />
        <SkeletonText width="24" height="h-12" />
        <SkeletonText width="24" height="h-12" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page-level skeleton layouts                                        */
/* ------------------------------------------------------------------ */

export function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <SkeletonCard>
        <SkeletonText width="48" height="h-4" />
        <SkeletonText width="3/4" height="h-8" className="mt-4" />
        <SkeletonText width="full" height="h-4" className="mt-3" />
        <SkeletonText width="full" height="h-12" className="mt-6" />
      </SkeletonCard>
      <SkeletonStatGrid count={4} />
      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          {Array.from({ length: 2 }).map((_, i) => (
            <SkeletonCard key={`gap-${i}`}>
              <div className="flex gap-4">
                <div className="flex-1 space-y-3">
                  <SkeletonText width="48" height="h-6" />
                  <SkeletonText width="full" height="h-4" />
                </div>
                <SkeletonText width="16" height="h-8" />
              </div>
              <SkeletonText width="full" height="h-4" className="mt-4" />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <SkeletonText width="full" height="h-10" />
                <SkeletonText width="full" height="h-10" />
                <SkeletonText width="full" height="h-10" />
              </div>
            </SkeletonCard>
          ))}
        </div>
        <div className="space-y-6">
          <SkeletonCard>
            <SkeletonText width="40" height="h-3" />
            <SkeletonText width="full" height="h-4" className="mt-3" />
            <div className="mt-5 space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <SkeletonText key={`win-${i}`} width="full" height="h-16" className="rounded-2xl" />
              ))}
            </div>
          </SkeletonCard>
          <SkeletonSkillPanel />
          <SkeletonSkillPanel />
          <SkeletonSkillPanel />
        </div>
      </section>
    </div>
  );
}

export function RecommendationSkeleton() {
  return (
    <div className="space-y-6">
      <SkeletonCard>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex-1 space-y-3">
            <SkeletonText width="32" height="h-3" />
            <SkeletonText width="3/4" height="h-8" />
            <SkeletonText width="full" height="h-4" />
          </div>
          <div className="grid w-full gap-3 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_0.8fr_auto]">
            <SkeletonText width="full" height="h-12" />
            <SkeletonText width="full" height="h-12" />
            <SkeletonText width="full" height="h-12" />
            <SkeletonText width="24" height="h-12" />
          </div>
        </div>
      </SkeletonCard>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SkeletonCard>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-3">
              <SkeletonText width="32" height="h-3" />
              <SkeletonText width="48" height="h-6" />
              <SkeletonText width="full" height="h-4" />
            </div>
            <SkeletonText width="16" height="h-10" />
          </div>
          <div className="mt-6 grid gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonText key={`miss-${i}`} width="full" height="h-16" className="rounded-2xl" />
            ))}
          </div>
        </SkeletonCard>

        <div className="space-y-6">
          <SkeletonSkillPanel />
          <SkeletonSkillPanel />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <SkeletonJobList count={3} />
        <div className="space-y-6">
          <SkeletonCompanyPanel />
          <SkeletonCard>
            <SkeletonText width="40" height="h-3" />
            <div className="mt-4 space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <SkeletonText key={`proj-${i}`} width="full" height="h-20" className="rounded-2xl" />
              ))}
            </div>
          </SkeletonCard>
        </div>
      </section>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="space-y-6">
      <SkeletonCard>
        <SkeletonText width="24" height="h-4" />
        <SkeletonText width="3/4" height="h-8" className="mt-4" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <SkeletonText width="16" height="h-4" className="mb-2" />
            <SkeletonText width="full" height="h-32" />
          </div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={`field-${i}`}>
              <SkeletonText width="24" height="h-4" className="mb-2" />
              <SkeletonText width="full" height="h-12" />
            </div>
          ))}
          <div className="lg:col-span-2">
            <SkeletonText width="24" height="h-4" className="mb-2" />
            <SkeletonText width="full" height="h-12" />
          </div>
          <SkeletonText width="32" height="h-12" />
        </div>
      </SkeletonCard>

      <SkeletonCard>
        <SkeletonText width="24" height="h-4" />
        <SkeletonText width="48" height="h-6" className="mt-4" />
        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_180px_auto]">
          <SkeletonText width="full" height="h-12" />
          <SkeletonText width="full" height="h-12" />
          <SkeletonText width="24" height="h-12" />
        </div>
      </SkeletonCard>
    </div>
  );
}

export function BookmarkSkeleton() {
  return (
    <div className="space-y-6">
      <SkeletonCard>
        <SkeletonText width="32" height="h-4" />
        <SkeletonText width="3/4" height="h-8" className="mt-4" />
      </SkeletonCard>
      <SkeletonBookmarkList count={3} />
    </div>
  );
}

export function ResumeSkeleton() {
  return (
    <section className="space-y-6">
      <SkeletonCard>
        <SkeletonText width="32" height="h-4" />
        <SkeletonText width="3/4" height="h-8" className="mt-4" />
        <SkeletonText width="full" height="h-4" className="mt-3" />
        <div className="mt-8 space-y-5">
          <div className="grid gap-4 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={`file-${i}`}>
                <SkeletonText width="24" height="h-4" className="mb-2" />
                <SkeletonText width="full" height="h-12" />
              </div>
            ))}
          </div>
          <div className="grid gap-4 xl:grid-cols-[1.4fr_auto_auto]">
            <SkeletonText width="full" height="h-12" />
            <SkeletonText width="32" height="h-12" />
            <SkeletonText width="32" height="h-12" />
          </div>
        </div>
      </SkeletonCard>
    </section>
  );
}

