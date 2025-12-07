"use client";

export default function LiquidBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-background">
      <div className="relative h-full w-full">
        <div className="blob-1 absolute -top-1/4 left-1/4 h-96 w-96 animate-blob rounded-full bg-yellow-400 opacity-20 mix-blend-multiply blur-2xl filter" />
        <div className="blob-2 absolute -bottom-1/4 right-1/4 h-96 w-96 animate-blob rounded-full bg-red-400 opacity-20 mix-blend-multiply blur-2xl filter" />
        <div className="blob-3 absolute -bottom-1/2 left-1/3 h-80 w-80 animate-blob-reverse rounded-full bg-green-400 opacity-20 mix-blend-multiply blur-2xl filter" />
      </div>
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes blob-reverse {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(-30px, 50px) scale(1.1);
          }
          66% {
            transform: translate(20px, -20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .blob-1 {
          animation-duration: 8s;
        }
        .blob-2 {
          animation-delay: 2s;
          animation-duration: 10s;
        }
        .blob-3 {
          animation-delay: 4s;
          animation-duration: 12s;
        }
        .animate-blob {
          animation-name: blob;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        .animate-blob-reverse {
          animation-name: blob-reverse;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  );
}
