import { ReactNode } from "react";
import {
  MessageCircleMore,
  ShieldCheck,
  Zap,
  Globe2,
} from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}
        <section className="relative hidden overflow-hidden lg:flex">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800" />

          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative z-10 flex w-full flex-col justify-between p-14 text-white">
            <div>
              <div className="flex items-center gap-4">
                <div className="rounded-3xl bg-white/15 p-4 backdrop-blur-md">
                  <MessageCircleMore className="h-10 w-10" />
                </div>

                <div>
                  <h1 className="text-4xl font-bold">
                    ChatSphere
                  </h1>

                  <p className="text-blue-100">
                    Modern Messaging Platform
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="max-w-xl text-6xl font-bold leading-tight">
                Connect with people
                <span className="block text-blue-200">
                  anywhere.
                </span>
              </h2>

              <p className="mt-8 max-w-lg text-lg leading-8 text-slate-200">
                Experience lightning-fast messaging,
                file sharing, group chats,
                and secure communication
                in one beautiful application.
              </p>

              <div className="mt-14 space-y-6">
                <div className="flex items-center gap-4">
                  <ShieldCheck className="h-8 w-8 text-green-300" />

                  <div>
                    <h3 className="font-semibold">
                      Secure Communication
                    </h3>

                    <p className="text-slate-200">
                      End-to-end encrypted messaging.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Zap className="h-8 w-8 text-yellow-300" />

                  <div>
                    <h3 className="font-semibold">
                      Lightning Fast
                    </h3>

                    <p className="text-slate-200">
                      Instant message delivery using WebSockets.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Globe2 className="h-8 w-8 text-cyan-300" />

                  <div>
                    <h3 className="font-semibold">
                      Global Access
                    </h3>

                    <p className="text-slate-200">
                      Connect from anywhere in the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>© 2026 ChatSphere</span>
              <span>Made with ❤️ using Next.js</span>
            </div>
          </div>
        </section>

        {/* Right Side */}

        <section className="relative flex items-center justify-center bg-slate-50 px-6 py-10 dark:bg-slate-950">
          <div className="absolute left-1/2 top-20 h-60 w-60 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl lg:hidden" />

          <div className="relative z-10 w-full max-w-md">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}