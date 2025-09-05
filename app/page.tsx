import React from 'react';
import MobileFeatures from './components/MobileFeatures';

// Local image assets
const accuracyIllustration = "/assets/images/illustrations/accuracy-illustration.svg";
const llmPlatformIllustration = "/assets/images/illustrations/llm-platform-illustration.svg";
const machineLearningIllustration = "/assets/images/illustrations/machine-learning-illustration.svg";
const apiControlIllustration = "/assets/images/illustrations/api-control-illustration.svg";
const securityIllustration = "/assets/images/illustrations/security-illustration.svg";

// Background watermark - using a placeholder for now
const backgroundWatermark = "http://localhost:3845/assets/0cc1f7e9181dc5dea38813a05c260eddc1caa349.svg";

export default function BreakpointDesktopFeatures5() {
  return (
    <>
      {/* Mobile Variant - Show on small screens */}
      <div className="block sm:hidden">
        <MobileFeatures />
      </div>

      {/* Desktop Variant - Show on larger screens */}
      <div className="hidden sm:block">
        <div className="bg-[#dde6e3] w-full min-h-screen flex items-center justify-center px-5 xs:px-16 py-24 xl-custom:px-20 overflow-x-hidden">
          <div className="box-border flex flex-col gap-10 items-start justify-start relative w-full max-w-[1280px]" data-name="breakpoint=desktop, features=5" data-node-id="1507:57671">
            {/* Background Watermark Vector */}
            <div className="absolute bottom-[-88px] h-[753px] right-[-557px] w-[1212px] pointer-events-none opacity-30" data-name="Vector" data-node-id="1507:57672">
              <img alt="" className="block max-w-none size-full" src={backgroundWatermark} />
            </div>

            {/* First Row: Headline + Card 1 (+ Card 2 on desktop) */}
            <div className="flex flex-row gap-10 items-stretch justify-start relative w-full" data-node-id="1507:57673">
              {/* Headline Section */}
              <div className="w-1/2 xl-custom:w-1/3 flex flex-col gap-10 items-start justify-center" data-name="typography-lockups" data-node-id="1507:57674">
                <div className="flex flex-col gap-4 items-start justify-start w-full" data-name="copy" id="node-I1507_57674-1053_85863">
                  <div className="font-neusans leading-[0] not-italic relative text-[#14343b] text-[44px] tracking-[-0.88px] w-full font-normal" id="node-I1507_57674-1053_85864">
                    <p className="leading-none">
                      <span className="text-[#14343b]">Let AI agents do your document processing</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 1 - Accuracy */}
              <div className="w-1/2 xl-custom:w-1/3 bg-[#fff9ee] flex flex-col items-end justify-start overflow-clip relative rounded-[32px]" data-name="card-1" data-node-id="1507:57675">
                <div className="box-border flex flex-col gap-4 items-start justify-start pb-0 pt-8 px-8 relative w-full" id="node-I1507_57675-536_17371">
                  <div className="flex flex-col gap-6 items-start justify-start relative w-full" data-name="typography-lockups" id="node-I1507_57675-1058_106799">
                    <div className="flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative w-full" data-name="copy" id="node-I1507_57675-1058_106799-1053_86014">
                      <div className="font-neusans relative text-[#14343b] text-[24px] sm:text-[34px] tracking-[-0.48px] sm:tracking-[-0.68px] w-full font-normal" id="node-I1507_57675-1058_106799-1053_86015">
                        <p className="leading-none">Achieve 99%+ accuracy</p>
                      </div>
                      <div className="font-helvetica relative text-[#2b484f] text-[16px] sm:text-[18px] w-full" id="node-I1507_57675-1058_106799-1053_86016">
                        <p className="leading-[24px] sm:leading-[26px]">90% isn't enough. Affinda's model memory approach learns from every interaction, reducing mistakes and freeing your team for more valuable work.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative w-full min-h-64" id="node-I1507_57675-536_17415">
                  <div className="absolute bottom-0 right-0 w-64 h-64 flex items-center justify-center" data-name="illustration" id="node-I1507_57675-536_17469">
                    <img alt="Accuracy illustration" className="max-w-full max-h-full object-contain" src={accuracyIllustration} />
                  </div>
                </div>
              </div>

              {/* Card 2 - LLM Platform (Desktop only in first row) */}
              <div className="hidden xl-custom:flex xl-custom:w-1/3 bg-[#c0ab8d] flex-col items-end justify-start overflow-clip relative rounded-[32px]" data-name="card-2" data-node-id="1507:57676">
                <div className="box-border flex flex-col gap-4 items-start justify-start pb-0 pt-8 px-8 relative w-full" id="node-I1507_57676-536_17371">
                  <div className="flex flex-col gap-6 items-start justify-start relative w-full" data-name="typography-lockups" id="node-I1507_57676-1058_106799">
                    <div className="flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative w-full" data-name="copy" id="node-I1507_57676-1058_106799-1053_86014">
                      <div className="font-neusans relative text-[#14343b] text-[24px] sm:text-[34px] tracking-[-0.48px] sm:tracking-[-0.68px] w-full font-normal" id="node-I1507_57676-1058_106799-1053_86015">
                        <p className="leading-none">More complete than LLMs alone</p>
                      </div>
                      <div className="font-helvetica relative text-[#2b484f] text-[16px] sm:text-[18px] w-full" id="node-I1507_57676-1058_106799-1053_86016">
                        <p className="leading-[24px] sm:leading-[26px]">LLMs alone hit limits. Affinda wraps an end-to-end platform around LLMs—adding model memory, RAG, OCR and more. Skip the bugs, get results in weeks.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative w-full min-h-64" id="node-I1507_57676-536_17415">
                  <div className="absolute bottom-0 right-0 w-64 h-64 flex items-center justify-center" data-name="illustration" id="node-I1507_57676-536_17469">
                    <img alt="LLM platform illustration" className="max-w-full max-h-full object-contain" src={llmPlatformIllustration} />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row: Card 2 + Card 3 (Mobile/Tablet) */}
            <div className="flex xl-custom:hidden gap-10 items-stretch justify-start relative w-full">
              {/* Card 2 - LLM Platform (Mobile) */}
              <div className="w-1/2 bg-[#c0ab8d] flex flex-col items-end justify-start overflow-clip relative rounded-[32px]" data-name="card-2-mobile">
                <div className="box-border flex flex-col gap-4 items-start justify-start pb-0 pt-8 px-8 relative w-full">
                  <div className="flex flex-col gap-6 items-start justify-start relative w-full" data-name="typography-lockups">
                    <div className="flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative w-full" data-name="copy">
                      <div className="font-neusans relative text-[#14343b] text-[24px] tracking-[-0.48px] w-full font-normal">
                        <p className="leading-none">More complete than LLMs alone</p>
                      </div>
                      <div className="font-helvetica relative text-[#2b484f] text-[16px] w-full">
                        <p className="leading-[24px]">LLMs alone hit limits. Affinda wraps an end-to-end platform around LLMs—adding model memory, RAG, OCR and more. Skip the bugs, get results in weeks.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative w-full min-h-64">
                  <div className="absolute bottom-0 right-0 w-64 h-64 flex items-center justify-center" data-name="illustration">
                    <img alt="LLM platform illustration" className="max-w-full max-h-full object-contain" src={llmPlatformIllustration} />
                  </div>
                </div>
              </div>

              {/* Card 3 - Machine Learning (Mobile) */}
              <div className="w-1/2 bg-[#c0ab8d] flex flex-col items-end justify-start overflow-clip relative rounded-[32px]" data-name="card-3-mobile">
                <div className="box-border flex flex-col gap-4 items-start justify-start pb-0 pt-8 px-8 relative w-full">
                  <div className="flex flex-col gap-6 items-start justify-start relative w-full" data-name="typography-lockups">
                    <div className="flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative w-full" data-name="copy">
                      <div className="font-neusans relative text-[#14343b] text-[24px] tracking-[-0.48px] w-full font-normal">
                        <p className="leading-none">More advanced than machine-learning IDP</p>
                      </div>
                      <div className="font-helvetica relative text-[#2b484f] text-[16px] w-full">
                        <p className="leading-[24px]">Traditional ML needs large datasets and constant upkeep. Affinda learns instantly from a few examples—no retraining, just fast, accurate models.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative w-full min-h-64">
                  <div className="absolute bottom-0 right-0 w-64 h-64 flex items-center justify-center" data-name="illustration">
                    <img alt="Machine learning illustration" className="max-w-full max-h-full object-contain" src={machineLearningIllustration} />
                  </div>
                </div>
              </div>
            </div>

            {/* Third Row: Card 4 + Card 5 (Mobile) / Second Row: Card 3 + Card 4 + Card 5 (Desktop) */}
            <div className="flex gap-10 items-stretch justify-start relative w-full" data-node-id="1507:57677">
              {/* Card 3 - Machine Learning (Desktop only) */}
              <div className="hidden xl-custom:flex xl-custom:w-1/3 bg-[#c0ab8d] flex-col items-end justify-start overflow-clip relative rounded-[32px]" data-name="card-3" data-node-id="1507:57678">
                <div className="box-border flex flex-col gap-4 items-start justify-start pb-0 pt-8 px-8 relative w-full" id="node-I1507_57678-536_17371">
                  <div className="flex flex-col gap-6 items-start justify-start relative w-full" data-name="typography-lockups" id="node-I1507_57678-1058_106799">
                    <div className="flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative w-full" data-name="copy" id="node-I1507_57678-1058_106799-1053_86014">
                      <div className="font-neusans relative text-[#14343b] text-[24px] sm:text-[34px] tracking-[-0.48px] sm:tracking-[-0.68px] w-full font-normal" id="node-I1507_57678-1058_106799-1053_86015">
                        <p className="leading-none">More advanced than machine-learning IDP</p>
                      </div>
                      <div className="font-helvetica relative text-[#2b484f] text-[16px] sm:text-[18px] w-full" id="node-I1507_57678-1058_106799-1053_86016">
                        <p className="leading-[24px] sm:leading-[26px]">Traditional ML needs large datasets and constant upkeep. Affinda learns instantly from a few examples—no retraining, just fast, accurate models.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative w-full min-h-64" id="node-I1507_57678-536_17415">
                  <div className="absolute bottom-0 right-0 w-64 h-64 flex items-center justify-center" data-name="illustration" id="node-I1507_57678-536_17469">
                    <img alt="Machine learning illustration" className="max-w-full max-h-full object-contain" src={machineLearningIllustration} />
                  </div>
                </div>
              </div>

              {/* Card 4 - API Control */}
              <div className="w-1/2 xl-custom:w-1/3 bg-[#14343b] flex flex-col items-end justify-start overflow-clip relative rounded-[32px]" data-name="card-4" data-node-id="1507:57679">
                <div className="box-border flex flex-col gap-4 items-start justify-start pb-0 pt-8 px-8 relative w-full" id="node-I1507_57679-536_17371">
                  <div className="flex flex-col gap-6 items-start justify-start relative w-full" data-name="typography-lockups" id="node-I1507_57679-1058_106799">
                    <div className="flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative w-full" data-name="copy" id="node-I1507_57679-1058_106799-1053_86014">
                      <div className="font-neusans relative text-[#c6d5d1] text-[24px] sm:text-[34px] tracking-[-0.48px] sm:tracking-[-0.68px] w-full font-normal" id="node-I1507_57679-1058_106799-1053_86015">
                        <p className="leading-none">Move fast and maintain control</p>
                      </div>
                      <div className="font-helvetica relative text-[#d0d6d8] text-[16px] sm:text-[18px] w-full" id="node-I1507_57679-1058_106799-1053_86016">
                        <p className="leading-[24px] sm:leading-[26px]">Build with Affinda or bring your own workflow. With APIs, sample code and docs, it's easy to get started and scale on your terms.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative w-full min-h-64" id="node-I1507_57679-536_17415">
                  <div className="absolute bottom-0 right-0 w-64 h-64 flex items-center justify-center" data-name="illustration" id="node-I1507_57679-536_17469">
                    <img alt="API control illustration" className="max-w-full max-h-full object-contain" src={apiControlIllustration} />
                  </div>
                </div>
              </div>

              {/* Card 5 - Security */}
              <div className="w-1/2 xl-custom:w-1/3 bg-[#fff9ee] flex flex-col items-end justify-start overflow-clip relative rounded-[32px]" data-name="card-5" data-node-id="1507:58016">
                <div className="box-border flex flex-col gap-4 items-start justify-start pb-0 pt-8 px-8 relative w-full" id="node-I1507_58016-536_17371">
                  <div className="flex flex-col gap-6 items-start justify-start relative w-full" data-name="typography-lockups" id="node-I1507_58016-1058_106799">
                    <div className="flex flex-col gap-4 items-start justify-start leading-[0] not-italic relative w-full" data-name="copy" id="node-I1507_58016-1058_106799-1053_86014">
                      <div className="font-neusans relative text-[#14343b] text-[24px] sm:text-[34px] tracking-[-0.48px] sm:tracking-[-0.68px] w-full font-normal" id="node-I1507_58016-1058_106799-1053_86015">
                        <p className="leading-none">Enterprise-grade security</p>
                      </div>
                      <div className="font-helvetica relative text-[#2b484f] text-[16px] sm:text-[18px] w-full" id="node-I1507_58016-1058_106799-1053_86016">
                        <p className="leading-[24px] sm:leading-[26px]">We take security as seriously as you do. Affinda is ISO27001 compliant, privacy-first and built for flexible, global deployment.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative w-full min-h-64" id="node-I1507_58016-536_17415">
                  <div className="absolute bottom-0 right-0 w-64 h-64 flex items-center justify-center" data-name="illustration" id="node-I1507_58016-536_17469">
                    <img alt="Security illustration" className="max-w-full max-h-full object-contain" src={securityIllustration} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
