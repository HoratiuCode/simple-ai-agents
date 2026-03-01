import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronRight,
  Code2,
  Zap,
  GitBranch,
  Cpu,
  Cloud,
  Database,
  CheckCircle2,
  ExternalLink,
  Copy,
} from "lucide-react";

/**
 * Design Philosophy: Minimalist Brutalism for GitHub Projects
 * - Clean, direct messaging for developers
 * - High contrast, professional dark theme
 * - Focus on technical clarity and quick adoption
 * - Inspired by: GitHub's design + Enzo Ferrari's obsession with precision
 */

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText("git clone https://github.com/LondheShubham153/simple-ai-agents");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const agents = [
    {
      name: "Gemini Agent",
      icon: <Cloud className="w-5 h-5" />,
      description: "Google Gemini 2.5 Flash with manual tool calling",
      tools: ["get_ip_address", "get_location", "get_weather"],
      setup: "pip install google-genai httpx python-dotenv",
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
    },
    {
      name: "LangChain + Ollama",
      icon: <Cpu className="w-5 h-5" />,
      description: "Local, zero-cost setup with Llama 3.2 (3B)",
      tools: ["get_current_time", "calculate", "get_ip_address"],
      setup: "pip install langchain langchain-ollama langgraph",
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
    },
    {
      name: "Strands Agent",
      icon: <Zap className="w-5 h-5" />,
      description: "Strands SDK with Amazon Bedrock (Claude)",
      tools: ["get_ip_address", "get_location", "get_weather"],
      setup: "pip install strands-agents strands-agents-tools httpx",
      color: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30",
    },
    {
      name: "Bedrock Converse",
      icon: <Database className="w-5 h-5" />,
      description: "Direct Bedrock API via boto3 with manual tool loop",
      tools: ["get_ip_address", "get_location", "get_weather"],
      setup: "pip install boto3 httpx",
      color: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30",
    },
  ];

  const features = [
    {
      title: "Minimal Setup",
      description: "Each agent fits in a single file. Copy, paste, run.",
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      title: "Multiple Frameworks",
      description: "Gemini, LangChain, Strands, Bedrock. Choose your stack.",
      icon: <GitBranch className="w-5 h-5" />,
    },
    {
      title: "Real Tools",
      description: "IP lookup, location, weather, time, calculations.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "Learn by Doing",
      description: "Understand agent patterns through working code.",
      icon: <CheckCircle2 className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center font-bold text-white text-sm">
              AI
            </div>
            <span className="font-bold text-lg">simple-ai-agents</span>
          </div>
          <nav className="flex items-center gap-4">
            <a
              href="https://github.com/LondheShubham153/simple-ai-agents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="space-y-6 mb-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              AI Agents Made Simple
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A collection of minimal AI agents built with different frameworks. Each one fits in a single file, has a couple of tools, and runs with an interactive chat loop. Learn how agents work by building them from scratch.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <Button
              onClick={handleCopyCommand}
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              {copied ? "Copied!" : "Clone Repository"}
              <Copy className="w-4 h-4" />
            </Button>
            <a
              href="https://github.com/LondheShubham153/simple-ai-agents"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 max-w-md">
            <div className="space-y-1">
              <p className="text-2xl font-bold">4</p>
              <p className="text-xs text-muted-foreground">Agent Frameworks</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">1</p>
              <p className="text-xs text-muted-foreground">File per Agent</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">MIT</p>
              <p className="text-xs text-muted-foreground">Open Source</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-12">Why simple-ai-agents?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex gap-4">
                <div className="text-primary mt-1">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Agents Showcase */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-12">Available Agents</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {agents.map((agent, idx) => (
            <Card
              key={idx}
              className={`p-6 bg-gradient-to-br ${agent.color} border ${agent.border} hover:border-primary/50 transition-all`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-1">{agent.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{agent.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {agent.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {agent.tools.map((tool, toolIdx) => (
                      <span
                        key={toolIdx}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-background/50 text-foreground text-xs rounded font-mono border border-border/50"
                      >
                        <ChevronRight className="w-3 h-3 text-primary" />
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Setup Command */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    Quick Setup
                  </p>
                  <div className="bg-background/50 border border-border rounded p-3">
                    <code className="text-xs text-foreground/80 font-mono break-all">
                      {agent.setup}
                    </code>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="bg-card border border-border rounded-lg p-8 space-y-6">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "1", label: "Ask a Question", desc: "You ask the agent something" },
              { step: "2", label: "Agent Thinks", desc: "LLM decides what to do" },
              { step: "3", label: "Uses Tools", desc: "Executes the right tool" },
              { step: "4", label: "Gets Answer", desc: "Returns the result" },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-sm text-muted-foreground italic pt-4 border-t border-border">
            This is the <strong>ReAct (Reason + Act) pattern</strong>. The LLM decides what to do, does it, observes the result, and repeats until it has an answer.
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-12">Quick Start</h2>
        <Card className="bg-background border-border overflow-hidden">
          <div className="bg-card border-b border-border px-6 py-3 flex items-center justify-between">
            <span className="text-sm font-mono text-muted-foreground">
              gemini/agent.py
            </span>
            <span className="text-xs text-muted-foreground">Python</span>
          </div>
          <div className="p-6 overflow-x-auto">
            <pre className="text-sm font-mono text-foreground/80 leading-relaxed">
{`# 1. Clone the repo
git clone https://github.com/LondheShubham153/simple-ai-agents
cd gemini

# 2. Set up environment
cp .env.example .env
# Add your GOOGLE_API_KEY

# 3. Install dependencies
pip install google-genai httpx python-dotenv

# 4. Run the agent
python agent.py

# 5. Start chatting!
> What's the weather in New York?`}
            </pre>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 border-t border-border">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Build Your Agent?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clone the repository, pick your framework, and start building. Each agent is a complete, working example you can learn from and modify.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <Button
              onClick={handleCopyCommand}
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              Clone Now
              <Copy className="w-4 h-4" />
            </Button>
            <a
              href="https://github.com/LondheShubham153/simple-ai-agents"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                View Repository
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            simple-ai-agents • Built by{" "}
            <a
              href="https://github.com/LondheShubham153"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Shubham Londhe
            </a>{" "}
            • MIT License
          </p>
        </div>
      </footer>
    </div>
  );
}
