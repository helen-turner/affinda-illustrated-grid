import React from 'react';

// Local image assets
const accuracyIllustration = "/assets/images/illustrations/accuracy-illustration.svg";
const llmPlatformIllustration = "/assets/images/illustrations/llm-platform-illustration.svg";
const machineLearningIllustration = "/assets/images/illustrations/machine-learning-illustration.svg";
const apiControlIllustration = "/assets/images/illustrations/api-control-illustration.svg";
const securityIllustration = "/assets/images/illustrations/security-illustration.svg";

interface ProgressLineProps {
  orientation?: "vertical" | "horizontal";
}

function ProgressLine({ orientation = "horizontal" }: ProgressLineProps) {
  return (
    <div className="relative w-full h-[3px] bg-[#d1ddda]">
      <div className="absolute top-0 left-0 h-full w-[30%] bg-[#8a7049]" />
    </div>
  );
}

export default function MobileFeatures() {
  return (
    <div className="bg-[#dde6e3] box-border flex flex-col gap-8 items-center justify-start py-14 relative w-full min-h-screen overflow-x-hidden">
      {/* Headline */}
      <div className="flex flex-col gap-10 items-start justify-start relative shrink-0 w-full px-5 xs:px-12">
        <div className="flex flex-col gap-4 items-start justify-start max-w-[840px] relative shrink-0 w-full">
          <div className="font-neusans leading-none not-italic relative shrink-0 text-[#14343b] text-[32px] tracking-[-0.64px] w-full font-normal">
            <p className="leading-none">
              <span className="text-[#14343b]">Let AI agents do your document processing</span>
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Cards Container */}
      <div className="relative shrink-0 w-full">
        <div className="flex gap-5 items-stretch justify-start overflow-x-auto scrollbar-hide pl-5 pr-5" style={{scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch'}}>
        {/* Card 1 - Accuracy */}
        <div className="bg-[#fff9ee] flex flex-col relative rounded-[24px] shrink-0 w-[315px] min-h-[400px]">
          {/* Image positioned at top-right */}
          <div className="absolute top-5 right-5 w-[200px] h-[200px] z-10">
            <img alt="Accuracy illustration" className="w-full h-full object-contain" src={accuracyIllustration} />
          </div>
          
          {/* Content area positioned with safe margin from illustration */}
          <div className="mt-[240px] p-7 pb-8 z-20">
            <div className="flex flex-col gap-3">
              <div className="font-neusans text-[#14343b] text-[25px] tracking-[-0.5px] font-normal leading-none">
                Achieve 99%+ accuracy
              </div>
              <div className="font-helvetica text-[#2b484f] text-[16px] leading-[24px]">
                90% isn't enough. Affinda's model memory approach learns from every interaction, reducing mistakes and freeing your team for more valuable work.
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - LLM Platform */}
        <div className="bg-[#c0ab8d] flex flex-col relative rounded-[24px] shrink-0 w-[315px] min-h-[400px]">
          {/* Image positioned at top-right */}
          <div className="absolute top-5 right-5 w-[200px] h-[200px] z-10">
            <img alt="LLM platform illustration" className="w-full h-full object-contain" src={llmPlatformIllustration} />
          </div>
          
          {/* Content area positioned with safe margin from illustration */}
          <div className="mt-[240px] p-7 pb-8 z-20">
            <div className="flex flex-col gap-3">
              <div className="font-neusans text-[#14343b] text-[25px] tracking-[-0.5px] font-normal leading-none">
                More complete than LLMs alone
              </div>
              <div className="font-helvetica text-[#2b484f] text-[16px] leading-[24px]">
                LLMs alone hit limits. Affinda wraps an end-to-end platform around LLMs—adding model memory, RAG, OCR and more. Skip the bugs, get results in weeks.
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - API Control */}
        <div className="bg-[#14343b] flex flex-col relative rounded-[24px] shrink-0 w-[315px] min-h-[400px]">
          {/* Image positioned at top-right */}
          <div className="absolute top-5 right-5 w-[200px] h-[200px] z-10">
            <img alt="API control illustration" className="w-full h-full object-contain" src={apiControlIllustration} />
          </div>
          
          {/* Content area positioned with safe margin from illustration */}
          <div className="mt-[240px] p-7 pb-8 z-20">
            <div className="flex flex-col gap-3">
              <div className="font-neusans text-[#c6d5d1] text-[25px] tracking-[-0.5px] font-normal leading-none">
                Move fast and maintain control
              </div>
              <div className="font-helvetica text-[#d0d6d8] text-[16px] leading-[24px]">
                Build with Affinda or bring your own workflow. With APIs, sample code and docs, it's easy to get started and scale on your terms.
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 - Security */}
        <div className="bg-[#fff9ee] flex flex-col relative rounded-[24px] shrink-0 w-[315px] min-h-[400px]">
          {/* Image positioned at top-right */}
          <div className="absolute top-5 right-5 w-[200px] h-[200px] z-10">
            <img alt="Security illustration" className="w-full h-full object-contain" src={securityIllustration} />
          </div>
          
          {/* Content area positioned with safe margin from illustration */}
          <div className="mt-[240px] p-7 pb-8 z-20">
            <div className="flex flex-col gap-3">
              <div className="font-neusans text-[#14343b] text-[25px] tracking-[-0.5px] font-normal leading-none">
                Enterprise-grade security
              </div>
              <div className="font-helvetica text-[#2b484f] text-[16px] leading-[24px]">
                We take security as seriously as you do. Affinda is ISO27001 compliant, privacy-first and built for flexible, global deployment.
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 - Machine Learning */}
        <div className="bg-[#c0ab8d] flex flex-col relative rounded-[24px] shrink-0 w-[315px] min-h-[400px]">
          {/* Image positioned at top-right */}
          <div className="absolute top-5 right-5 w-[200px] h-[200px] z-10">
            <img alt="Machine learning illustration" className="w-full h-full object-contain" src={machineLearningIllustration} />
          </div>
          
          {/* Content area positioned with safe margin from illustration */}
          <div className="mt-[240px] p-7 pb-8 z-20">
            <div className="flex flex-col gap-3">
              <div className="font-neusans text-[#14343b] text-[25px] tracking-[-0.5px] font-normal leading-none">
                More advanced than machine-learning IDP
              </div>
              <div className="font-helvetica text-[#2b484f] text-[16px] leading-[24px]">
                Traditional ML needs large datasets and constant upkeep. Affinda learns instantly from a few examples—no retraining, just fast, accurate models.
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Progress Line */}
      <div className="px-5 xs:px-12 w-full">
        <ProgressLine />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-3 items-start justify-start relative shrink-0 w-full px-5 xs:px-12">
        <div className="bg-[#a6fffb] box-border flex items-center justify-center px-6 py-3 relative rounded-full shrink-0 w-full border border-[#14343b]">
          <div className="box-border flex gap-2.5 h-6 items-center justify-center px-3 py-0 relative shrink-0">
            <div className="font-neusans leading-none not-italic relative shrink-0 text-[#14343b] text-[17px] text-center text-nowrap font-normal">
              <p className="leading-[20px]">Get Started</p>
            </div>
          </div>
        </div>
        <div className="box-border flex items-center justify-center px-6 py-3 relative rounded-full shrink-0 w-full border border-[#14343b]">
          <div className="box-border flex gap-2.5 h-6 items-center justify-center px-3 py-0 relative shrink-0">
            <div className="font-neusans leading-none not-italic relative shrink-0 text-[#14343b] text-[17px] text-center text-nowrap font-normal">
              <p className="leading-[20px]">Learn More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
