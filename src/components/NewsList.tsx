<<<<<<< HEAD
import { useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Trophy,
  Users,
  Phone,
  ArrowRight,
  ZoomIn,
  CheckCircle2,
  Download,
  Building,
  GraduationCap,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { NEWS, type NewsItem } from "@/data/site";

// Poster & Event Images
import innovateX from "@/assets/innovate-x.png";
import tensor26Poster from "@/assets/tensor26-new.jpg";
import webforgePoster from "@/assets/webforge-inauguration.png";
import digitalSecurityPoster from "@/assets/poster-digital-security.jpg";
import brainInsightsPoster from "@/assets/poster-brain-data-insights.jpg";
import dataCanvasPoster from "@/assets/poster-data-canvas.jpg";
import dataWarsPoster from "@/assets/poster-data-wars.jpg";
import dataSparkPoster from "@/assets/poster-data-spark.jpg";
import aiMythBuster from "@/assets/ai-myth-buster.png";
import bugFix from "@/assets/ieee-bug-fix.png";
import news3 from "@/assets/news-3.jpg";

const POSTER_BY_ID: Record<string, string> = {
  "innovate-x": innovateX,
  tensor26: tensor26Poster,
  webforge: webforgePoster,
  "digital-security": digitalSecurityPoster,
  "brain-insights": brainInsightsPoster,
  "data-canvas": dataCanvasPoster,
  "data-wars": dataWarsPoster,
  "data-spark": dataSparkPoster,
};

const FALLBACK_IMAGES = [innovateX, tensor26Poster, webforgePoster, news3, aiMythBuster, bugFix];

export function NewsList({ limit }: { limit?: number }) {
  const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null);

  const items: NewsItem[] = limit ? NEWS.slice(0, limit) : NEWS;

  const getItemImage = (item: NewsItem, index: number = 0): string => {
    if (item.id && POSTER_BY_ID[item.id]) {
      return POSTER_BY_ID[item.id];
    }
    return FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
  };

  return (
    <div className="mt-10">
      {/* GRID OF NEWS & EVENT CARDS */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const imageSrc = getItemImage(item, index);
          const isTensor = item.id === "tensor26";

          return (
            <article
              key={item.title}
              className={`group flex flex-col h-full overflow-hidden rounded-lg border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${
                isTensor ? "border-primary/50 ring-1 ring-primary/20" : "border-border"
              }`}
            >
              {/* Clear, uncropped portrait poster container with consistent dimensions */}
              <div
                onClick={() => setSelectedItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedItem(item)}
                className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100/90 dark:bg-slate-900/50 p-3 flex items-center justify-center cursor-pointer group/poster border-b border-border"
                title="Click to view full clear poster"
              >
                <img
                  src={imageSrc}
                  alt={item.title}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="h-full w-full object-contain drop-shadow-xs transition-transform duration-500 group-hover/poster:scale-105"
                />

                {/* Category Badge */}
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded bg-primary/95 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-primary-foreground shadow">
                  {item.category}
                </span>

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/80 opacity-0 transition-opacity duration-200 group-hover/poster:opacity-100 p-4 text-center text-primary-foreground backdrop-blur-xs">
                  <ZoomIn className="h-8 w-8 text-accent drop-shadow mb-1" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Click to View Clear Poster
                  </span>
                  <span className="text-[0.65rem] text-primary-foreground/80 mt-0.5">
                    High-definition view & full details
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    <span className="text-accent">{item.category}</span>
                    <span className="flex items-center gap-1 text-[0.7rem] normal-case">
                      <CalendarDays className="h-3 w-3 text-accent" />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="mt-2 text-base font-bold leading-snug text-primary">
                    {item.title}
                  </h3>

                  {item.tagline && (
                    <p className="mt-1 text-xs italic font-medium text-accent">"{item.tagline}"</p>
                  )}

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {item.description}
                  </p>

                  {/* Quick Info Badges */}
                  {item.details && (
                    <div className="mt-3 space-y-1.5 text-xs">
                      {item.details.prizePool && (
                        <div className="flex items-center gap-1.5 rounded-sm bg-accent/10 px-2 py-1 font-semibold text-accent">
                          <Trophy className="h-3.5 w-3.5 shrink-0" />
                          <span>
                            Prize Pool: <strong>₹56,000</strong>
                          </span>
                        </div>
                      )}
                      {item.details.venue && (
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                          <span className="truncate">{item.details.venue}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom Action Bar */}
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent underline-offset-4 hover:text-primary hover:underline cursor-pointer focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    View Details & Poster
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>

                  {item.details?.pdfUrl && (
                    <a
                      href={item.details.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-muted-foreground hover:text-accent flex items-center gap-1"
                      title="Download Original PDF"
                    >
                      <Download className="h-3.5 w-3.5" />
                      PDF
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* FULL POSTER & DETAILS LIGHTBOX MODAL */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto p-5 sm:p-7">
          {selectedItem && (
            <div>
              <DialogHeader className="mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-sm bg-accent/15 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-accent">
                    {selectedItem.category}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5 text-accent" />
                    {selectedItem.date}
                  </span>
                </div>
                <DialogTitle className="text-xl font-bold leading-tight text-primary sm:text-2xl mt-1">
                  {selectedItem.title}
                </DialogTitle>
                {selectedItem.tagline && (
                  <p className="text-xs italic font-medium text-accent">"{selectedItem.tagline}"</p>
                )}
                <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                  {selectedItem.description}
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-6 md:grid-cols-12 items-start border-t border-border pt-4">
                {/* Poster Display */}
                <div className="md:col-span-6 flex flex-col items-center">
                  <div className="overflow-hidden rounded-lg border border-border bg-slate-100/90 dark:bg-slate-900/60 shadow-md p-3 w-full flex items-center justify-center">
                    <img
                      src={getItemImage(selectedItem)}
                      alt={selectedItem.title}
                      className="max-h-[62vh] w-auto max-w-full object-contain rounded"
                    />
                  </div>

                  <div className="mt-3 flex flex-wrap items-center justify-center gap-3 w-full text-xs">
                    <a
                      href={getItemImage(selectedItem)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                    >
                      <ZoomIn className="h-3.5 w-3.5" />
                      Open Full Image
                    </a>
                    {selectedItem.details?.pdfUrl && (
                      <>
                        <span className="text-muted-foreground">·</span>
                        <a
                          href={selectedItem.details.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                        >
                          <Download className="h-3.5 w-3.5" />
                          View Original PDF
                        </a>
                      </>
                    )}
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="md:col-span-6 space-y-3.5 text-xs">
                  {selectedItem.details ? (
                    <>
                      {/* Venue & Time */}
                      <div className="space-y-2 rounded-md border border-border bg-muted/40 p-3.5">
                        {selectedItem.details.venue && (
                          <div className="flex items-start gap-2 text-foreground">
                            <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            <div>
                              <strong className="font-semibold text-primary">Venue: </strong>
                              <span>{selectedItem.details.venue}</span>
                            </div>
                          </div>
                        )}
                        {selectedItem.details.time && (
                          <div className="flex items-center gap-2 text-foreground">
                            <Clock className="h-4 w-4 text-accent shrink-0" />
                            <div>
                              <strong className="font-semibold text-primary">Time: </strong>
                              <span>{selectedItem.details.time}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Prize & Fees */}
                      {(selectedItem.details.prizePool ||
                        selectedItem.details.registrationFee ||
                        selectedItem.details.teamSize) && (
                        <div className="space-y-2 rounded-md border border-border bg-muted/40 p-3.5">
                          {selectedItem.details.prizePool && (
                            <div className="flex items-start gap-2">
                              <Trophy className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <div>
                                <strong className="font-semibold text-primary">Prize Pool: </strong>
                                <span className="font-bold text-accent">
                                  {selectedItem.details.prizePool}
                                </span>
                              </div>
                            </div>
                          )}
                          {selectedItem.details.teamSize && (
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-accent shrink-0" />
                              <div>
                                <strong className="font-semibold text-primary">Team Size: </strong>
                                <span>{selectedItem.details.teamSize}</span>
                              </div>
                            </div>
                          )}
                          {selectedItem.details.registrationFee && (
                            <div className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4 text-accent shrink-0" />
                              <div>
                                <strong className="font-semibold text-primary">
                                  Registration:{" "}
                                </strong>
                                <span>{selectedItem.details.registrationFee}</span>
                              </div>
                            </div>
                          )}
                          {selectedItem.details.eligibility && (
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <div>
                                <strong className="font-semibold text-primary">
                                  Eligibility:{" "}
                                </strong>
                                <span>{selectedItem.details.eligibility}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Phases */}
                      {selectedItem.details.phases && (
                        <div className="rounded-md border border-border bg-muted/40 p-3.5">
                          <strong className="font-semibold uppercase tracking-wider text-accent block mb-2">
                            Challenge Phases
                          </strong>
                          <ul className="space-y-1.5 pl-1">
                            {selectedItem.details.phases.map((p, pI) => (
                              <li key={pI} className="flex items-start gap-2 text-foreground/90">
                                <span className="font-bold text-accent shrink-0">•</span>
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Highlights */}
                      {selectedItem.details.highlights && (
                        <div className="rounded-md border border-border bg-muted/40 p-3.5">
                          <strong className="font-semibold uppercase tracking-wider text-accent block mb-2">
                            Key Highlights
                          </strong>
                          <ul className="space-y-1.5 pl-1">
                            {selectedItem.details.highlights.map((h, hI) => (
                              <li key={hI} className="flex items-start gap-2 text-foreground/90">
                                <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Organizers & Contact */}
                      {(selectedItem.details.organizers || selectedItem.details.contact) && (
                        <div className="space-y-2 rounded-md border border-border bg-muted/40 p-3.5">
                          {selectedItem.details.organizers && (
                            <div className="flex items-start gap-2">
                              <Building className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <div>
                                <strong className="font-semibold text-primary">
                                  Organized By:{" "}
                                </strong>
                                <span>{selectedItem.details.organizers}</span>
                              </div>
                            </div>
                          )}
                          {selectedItem.details.contact && (
                            <div className="flex items-start gap-2">
                              <Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <div>
                                <strong className="font-semibold text-primary">Contact: </strong>
                                <span>{selectedItem.details.contact}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="rounded-md border border-border bg-muted/40 p-4 text-muted-foreground">
                      No additional technical details specified for this announcement.
                    </div>
                  )}

                  {/* Contact Phone Button */}
                  {selectedItem.details?.contactPhone && (
                    <div className="pt-2">
                      <a
                        href={`tel:${selectedItem.details.contactPhone}`}
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-sm bg-primary px-4 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow transition-colors hover:bg-primary-deep"
                      >
                        <Phone className="h-4 w-4" />
                        Call {selectedItem.details.contactPhone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
=======
import { ArrowRight } from "lucide-react";
<<<<<<< HEAD
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import { NEWS, type NewsItem } from "@/data/site";

const IMAGES = [news1, news2, news3];

export function NewsList({ limit }: { limit?: number }) {
  const items: NewsItem[] = limit ? NEWS.slice(0, limit) : NEWS;

=======
import about from "@/assets/about.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { NEWS, type NewsItem } from "@/data/site";

const IMAGES = [hero2, about, hero3, hero1];

export function NewsList({ limit }: { limit?: number }) {
  const items: NewsItem[] = limit ? NEWS.slice(0, limit) : NEWS;
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <article
          key={item.title}
          className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
        >
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={IMAGES[i % IMAGES.length]}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
<<<<<<< HEAD

=======
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
          <div className="flex flex-1 flex-col p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="text-accent">{item.category}</span> · {item.date}
            </p>
<<<<<<< HEAD

            <h3 className="mt-2 text-base font-bold leading-snug text-primary">
              {item.title}
            </h3>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>

=======
            <h3 className="mt-2 text-base font-bold leading-snug text-primary">{item.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
            <a
              href="#article"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent underline-offset-4 hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Read More
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> d0e86d16073d4b073e44be200fab16a1968417f0
>>>>>>> b8a328fd82eaa9d72376afee2d25eba7169a5e73
