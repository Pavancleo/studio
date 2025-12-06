"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Copy, Check } from "lucide-react";
import { projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useInView } from "@/hooks/use-in-view";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const codeSnippet = `
import os
import openai
from IPython.display import display, HTML, clear_output
import ipywidgets as widgets
from datetime import datetime
import json
import traceback

MODEL = os.getenv("OPENAI_MODEL", "gpt-4")
openai.api_key = os.getenv("OPENAI_API_KEY")
SYSTEM_PROMPT = (
    "You are a helpful, concise assistant. Keep replies informative and friendly. "
    "In short responses be direct; when user asks for code, include runnable examples."
)

messages = [
    {"role": "system", "content": SYSTEM_PROMPT}
]

chat_out = widgets.Output(layout={"border": "1px solid #ddd", "padding": "8px", "height": "330px", "overflow": "auto"})
user_input = widgets.Textarea(placeholder="Type your message... (Shift+Enter to send)", layout={"width": "100%", "height": "70px"})
send_button = widgets.Button(description="Send", button_style="primary")
clear_button = widgets.Button(description="Clear Chat")
save_button = widgets.Button(description="Save Chat (.json)")
status_label = widgets.Label(value="Ready")

def render_message(role, text):
    time = datetime.now().strftime("%H:%M:%S")
    if role == "user":
        box = f'<div style="text-align:right;margin:6px;"><div style="display:inline-block;background:#E8F0FF;padding:8px;border-radius:8px;max-width:80%;">' \\
              f'<strong>You</strong> <small style="color:#666"> {time}</small><div style="margin-top:6px;white-space:pre-wrap;">{text}</div></div></div>'
    elif role == "assistant":
        box = f'<div style="text-align:left;margin:6px;"><div style="display:inline-block;background:#F6F6F6;padding:8px;border-radius:8px;max-width:80%;">' \\
              f'<strong>Bot</strong> <small style="color:#666"> {time}</small><div style="margin-top:6px;white-space:pre-wrap;">{text}</div></div></div>'
    else:
        box = f'<div style="margin:6px;color:#999;white-space:pre-wrap;">{text}</div>'
    return box

def print_chat():
    with chat_out:
        clear_output(wait=True)
        html = ""
        for m in messages:
            if m["role"] == "system":
                continue
            html += render_message(m["role"], m["content"])
        display(HTML(html))

def add_and_send(user_text):
    if not openai.api_key:
        status_label.value = "Missing OPENAI_API_KEY"
        return

    user_text = user_text.strip()
    if not user_text:
        return

    messages.append({"role": "user", "content": user_text})
    print_chat()
    status_label.value = "Thinking..."

    try:
        resp = openai.ChatCompletion.create(
            model=MODEL,
            messages=messages,
            temperature=0.2,
            max_tokens=800,
            n=1,
            stop=None,
        )
        assistant_text = resp["choices"][0]["message"]["content"].strip()
        messages.append({"role": "assistant", "content": assistant_text})
        print_chat()
        status_label.value = "Done"
    except Exception as e:
        err = "".join(traceback.format_exception_only(type(e), e)).strip()
        messages.append({"role": "assistant", "content": f"Error: {err}"})
        print_chat()
        status_label.value = "Error"
        raise

def on_send_clicked(b):
    text = user_input.value
    user_input.value = ""
    add_and_send(text)

def on_clear_clicked(b):
    global messages
    messages = [m for m in messages if m["role"] == "system"]
    print_chat()
    status_label.value = "Cleared"

def on_save_clicked(b):
    fname = f"chat_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    with open(fname, "w", encoding="utf-8") as f:
        json.dump(messages, f, ensure_ascii=False, indent=2)
    status_label.value = f"Saved {fname}"

send_button.on_click(on_send_clicked)
clear_button.on_click(on_clear_clicked)
save_button.on_click(on_save_clicked)

def _on_keypress(change):
    if change.get("name") == "value" and change.get("owner") is user_input:
        pass

user_input.observe(_on_keypress)

controls = widgets.HBox([send_button, clear_button, save_button, status_label])
ui = widgets.VBox([chat_out, user_input, controls])
print_chat()
display(ui)

def ask(text):
    add_and_send(text)
    return [m for m in messages if m["role"] == "assistant"][-1]["content"]
`.trim();

function CodeDialog({ projectTitle }: { projectTitle: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Link
          href="#"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-background/50 px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur-xl transition-all hover:bg-background/70 hover:text-foreground hover:shadow-[0_0_15px_2px_hsl(var(--chart-3)/70%)]"
        >
          <Github className="h-4 w-4" /> Code
        </Link>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-purple-950/80 backdrop-blur-2xl border-purple-500/50 text-slate-200 shadow-[0_0_35px_8px_hsl(var(--primary)/40%)]">
        <DialogHeader>
          <DialogTitle>{projectTitle} - Source Code</DialogTitle>
        </DialogHeader>
        <div className="relative overflow-hidden rounded-lg border border-slate-800">
          <Button
            size="icon"
            variant="ghost"
            onClick={handleCopy}
            className="absolute top-2 right-2 h-8 w-8 text-slate-400 hover:bg-slate-700 hover:text-white z-10"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span className="sr-only">Copy code</span>
          </Button>
          <div className="max-h-[60vh] overflow-auto bg-black/50 p-4 code-scrollbar">
            <pre className="text-sm">
              <code className="font-code">{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


export default function ProjectsSection() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-16 md:py-24 bg-pink-100/50 backdrop-blur-2xl border-t border-b border-black/10 transition-all duration-1000 ${inView ? 'opacity-100 animate-bounce-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
            return (
              <Card 
                key={project.title} 
                className="overflow-hidden bg-background/30 backdrop-blur-2xl border border-black/10 rounded-xl shadow-lg transition-all duration-300 hover:bg-background/50 hover:border-primary hover:shadow-[0_0_35px_8px_hsl(var(--primary)/40%)] hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {projectImage && (
                    <div className="aspect-video relative">
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover w-full h-full"
                        data-ai-hint={projectImage.imageHint}
                      />
                    </div>
                  )}
                  <p className="p-6 text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter className="bg-transparent">
                  <div className="flex w-full justify-end space-x-2">
                    {index === 0 ? (
                      <CodeDialog projectTitle={project.title} />
                    ) : (
                      <Button
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-background/50 px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur-xl transition-all"
                      >
                        <Github className="h-4 w-4" /> Code
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
