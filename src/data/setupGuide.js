export const setupPhases = [
  {
    phase: 1,
    title: "System Foundation Setup",
    steps: [
      {
        title: "Install Command Line Tools",
        code: "xcode-select --install",
        description: "Xcode Command Line Tools are Apple's free developer utilities bundled with macOS. They include essential compilers, <code>make</code>, and a standalone <code>git</code>. Nearly every tool in this guide depends on them. When you run this command a dialog will appear — click <strong>Install</strong>, not <em>Get Xcode</em> (which is much larger).",
        links: [
          { label: "Apple Developer Tools Overview", url: "https://developer.apple.com/xcode/resources/" },
          { label: "mac.install.guide – Command Line Tools", url: "https://mac.install.guide/commandlinetools/" }
        ]
      },
      {
        title: "Install Homebrew",
        code: "/bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"",
        description: "Homebrew is the most popular package manager for macOS — think of it as an app store for the command line. Instead of downloading <code>.dmg</code> installers from websites, you run <code>brew install &lt;name&gt;</code> and Homebrew handles downloading, installing, and updating for you.",
        links: [
          { label: "Homebrew Official Site", url: "https://brew.sh" },
          { label: "Homebrew Docs", url: "https://docs.brew.sh" }
        ],
        tip: "After installing, run <code>brew doctor</code> to verify everything is healthy. Search for any package before installing it with <code>brew search &lt;name&gt;</code>."
      },
      {
        title: "Configure Homebrew",
        code: "echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> ~/.zshrc\nsource ~/.zshrc",
        description: "The <code>~/.zshrc</code> file is your shell's startup script — every line in it runs each time you open a new terminal window. The tilde (<code>~</code>) is a shortcut for your home directory (e.g. <code>/Users/tracymartin</code>). This step adds Homebrew's bin folder to your <code>PATH</code> so the <code>brew</code> command is always available.",
        tip: "View your <code>.zshrc</code> anytime with <code>cat ~/.zshrc</code>. To reload it without closing the terminal, run <code>source ~/.zshrc</code>."
      },
      {
        title: "Install Essential System Tools",
        code: "brew install git wget curl tree htop neofetch jq",
        description: "<strong>git</strong> — version control (track changes to your code). <strong>wget</strong>/<strong>curl</strong> — download files from the internet. <strong>tree</strong> — visualize directory structure as a tree. <strong>htop</strong> — interactive CPU and memory monitor. <strong>jq</strong> — parse and format JSON output in the terminal (invaluable when working with APIs).",
        links: [
          { label: "Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" },
          { label: "jq Manual", url: "https://jqlang.github.io/jq/manual/" }
        ],
        tip: "Try these right away: <code>tree -L 2 ~</code> to see your home folder structure, or <code>curl -s https://api.github.com/zen | jq</code> to see a live JSON API response formatted nicely."
      }
    ]
  },
  {
    phase: 2,
    title: "Terminal & Shell Enhancement",
    steps: [
      {
        title: "Install Oh My Zsh",
        code: "sh -c \"$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)\"",
        description: "<strong>Oh My Zsh</strong> is a community-driven framework that supercharges Zsh (macOS's default shell) with hundreds of plugins — git shortcuts, auto-suggestions, syntax highlighting — and a rich theme ecosystem. It transforms a bare terminal into an intelligent, context-aware tool.",
        links: [
          { label: "Oh My Zsh Official Site", url: "https://ohmyz.sh" },
          { label: "Available Plugins", url: "https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins" }
        ]
      },
      {
        title: "Install Powerlevel10k Theme",
        code: "git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k",
        description: "Powerlevel10k is an extremely fast Zsh theme that adds rich context to your prompt: current Git branch and status, active Python/conda environment, exit codes, background jobs, command execution time, and more — all without slowing your terminal down.",
        links: [
          { label: "Powerlevel10k on GitHub", url: "https://github.com/romkatv/powerlevel10k" }
        ]
      },
      {
        title: "Configure Theme",
        description: "Edit <code>~/.zshrc</code> and set the <code>ZSH_THEME</code> line to activate Powerlevel10k:",
        code: "ZSH_THEME=\"powerlevel10k/powerlevel10k\"",
        tip: "After saving, run <code>source ~/.zshrc</code> then <code>p10k configure</code> to launch the interactive setup wizard. Choose a <em>Nerd Font</em> option for icons and glyphs. Recommended font: <a href='https://www.nerdfonts.com/font-downloads' target='_blank'>MesloLGS NF</a>."
      },
      {
        title: "Install iTerm2",
        code: "brew install --cask iterm2",
        description: "<strong>iTerm2</strong> is a powerful replacement for macOS's built-in Terminal app, offering split panes, a robust search, shell integration, profile-based color schemes, and mouse support. It's the preferred terminal for most macOS developers.",
        links: [
          { label: "iTerm2 Official Site", url: "https://iterm2.com" },
          { label: "iTerm2 Features", url: "https://iterm2.com/features.html" }
        ],
        tip: "Key shortcuts: <code>⌘D</code> splits the pane vertically, <code>⌘⇧D</code> splits horizontally. <code>⌘⌥B</code> opens Instant Replay to scroll back through previous terminal output."
      }
    ]
  },
  {
    phase: 3,
    title: "Python Development Environment",
    steps: [
      {
        title: "Install Python Version Management (pyenv)",
        code: "brew install pyenv\necho 'export PYENV_ROOT=\"$HOME/.pyenv\"' >> ~/.zshrc\necho 'command -v pyenv >/dev/null || export PATH=\"$PYENV_ROOT/bin:$PATH\"' >> ~/.zshrc\necho 'eval \"$(pyenv init -)\"' >> ~/.zshrc\nsource ~/.zshrc",
        description: "Different projects often require different Python versions, and macOS's built-in Python should <strong>never</strong> be modified. <strong>pyenv</strong> lets you install multiple Python versions side-by-side and switch between them per-project. It's the standard solution on macOS.",
        links: [
          { label: "pyenv on GitHub", url: "https://github.com/pyenv/pyenv" },
          { label: "pyenv Command Reference", url: "https://github.com/pyenv/pyenv/blob/master/COMMANDS.md" }
        ],
        tip: "List all installable versions with <code>pyenv install --list | grep '  3\\.1'</code>. Set a Python version for a single project with <code>pyenv local 3.12.1</code> (run inside that project's folder)."
      },
      {
        title: "Install Python Versions",
        code: "pyenv install 3.11.7\npyenv install 3.12.1\npyenv global 3.11.7",
        description: "<strong>Python 3.11</strong> offers the best compatibility with current AI/ML libraries (PyTorch, TensorFlow, HuggingFace) and is recommended as your primary version. <strong>Python 3.12</strong> is the latest stable release with ~25% performance improvements. The <code>pyenv global</code> command sets the system-wide default.",
        links: [
          { label: "What's New in Python 3.11", url: "https://docs.python.org/3/whatsnew/3.11.html" },
          { label: "Python Release Calendar", url: "https://devguide.python.org/versions/" }
        ]
      },
      {
        title: "Install Poetry",
        code: "curl -sSL https://install.python-poetry.org | python3 -\necho 'export PATH=\"$HOME/.local/bin:$PATH\"' >> ~/.zshrc\nsource ~/.zshrc",
        description: "<strong>Poetry</strong> is a modern Python dependency manager. Unlike the older <code>pip + requirements.txt</code> workflow, Poetry uses a <code>pyproject.toml</code> lockfile that pins exact dependency versions and auto-manages virtual environments — so your project is fully reproducible on any machine.",
        links: [
          { label: "Poetry Official Docs", url: "https://python-poetry.org/docs/" },
          { label: "Poetry Basic Usage", url: "https://python-poetry.org/docs/basic-usage/" }
        ],
        tip: "Start a new project: <code>poetry new my-project</code>. Add a dependency: <code>poetry add requests</code>. Run a script inside the environment: <code>poetry run python app.py</code>."
      },
      {
        title: "Install Miniconda",
        code: "brew install --cask miniconda\nconda init zsh\nsource ~/.zshrc",
        description: "<strong>Conda</strong> is the package and environment manager that the data science community relies on. Unlike Poetry (Python-only), Conda handles non-Python binary dependencies too — which is essential for ML libraries like PyTorch that depend on native BLAS/LAPACK libraries. <strong>Miniconda</strong> is the minimal installer (no pre-bundled packages).",
        links: [
          { label: "Miniconda Docs", url: "https://docs.conda.io/en/latest/miniconda.html" },
          { label: "Conda Cheat Sheet", url: "https://docs.conda.io/projects/conda/en/latest/_downloads/843d9e0198f2a193a3484886fa28163c/conda-cheatsheet.pdf" }
        ],
        tip: "Quick workflow: <code>conda create -n my-env python=3.11</code> → <code>conda activate my-env</code> → install packages → <code>conda deactivate</code> when done. List all environments with <code>conda env list</code>."
      }
    ]
  },
  {
    phase: 4,
    title: "C# Development Environment",
    steps: [
      {
        title: "Install .NET SDK",
        code: "brew install --cask dotnet-sdk",
        description: "<strong>.NET</strong> is Microsoft's free, open-source, cross-platform development platform. It runs natively on Apple Silicon and supports C# 12, F#, and Visual Basic. You can build web APIs (ASP.NET Core), console apps, desktop apps (with MAUI), and microservices — all from macOS.",
        links: [
          { label: "What is .NET?", url: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet" },
          { label: ".NET Documentation", url: "https://docs.microsoft.com/en-us/dotnet/" },
          { label: "C# Language Tour", url: "https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/" }
        ]
      },
      {
        title: "Verify Installation",
        code: "dotnet --version\ndotnet --list-sdks",
        description: "These commands confirm the SDK installed correctly and list all available SDK versions. If a version number appears, you're ready to build C# apps.",
        links: [
          { label: "Your First C# App (5-min tutorial)", url: "https://dotnet.microsoft.com/en-us/learn/dotnet/hello-world-tutorial/intro" }
        ],
        tip: "Create and run your first C# console app in one shot: <code>dotnet new console -n HelloWorld &amp;&amp; cd HelloWorld &amp;&amp; dotnet run</code>"
      }
    ]
  },
  {
    phase: 5,
    title: "Development Tools & IDEs",
    steps: [
      {
        title: "Install Visual Studio Code",
        code: "brew install --cask visual-studio-code",
        description: "<strong>VS Code</strong> is a free, lightweight, and endlessly extensible code editor from Microsoft. It's the world's most popular editor — especially for Python and web development — with thousands of extensions covering every language, linter, debugger, and workflow tool imaginable.",
        links: [
          { label: "VS Code Official Site", url: "https://code.visualstudio.com" },
          { label: "Getting Started Videos", url: "https://code.visualstudio.com/docs/getstarted/introvideos" },
          { label: "macOS Keyboard Shortcuts (PDF)", url: "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf" }
        ],
        tip: "Essential shortcuts: <code>⌘⇧P</code> opens the Command Palette (run any action by name), <code>⌘P</code> opens a file by name, <code>⌘`</code> opens the integrated terminal."
      },
      {
        title: "Install JetBrains Rider",
        code: "brew install --cask rider",
        description: "<strong>Rider</strong> is JetBrains' professional C#/.NET IDE with deep code intelligence, built-in decompiler, database tools, Docker support, and Unity integration. It includes a 30-day free trial; free educational licenses are available through JetBrains' student program.",
        links: [
          { label: "Rider Official Site", url: "https://www.jetbrains.com/rider/" },
          { label: "Free Student License", url: "https://www.jetbrains.com/community/education/" }
        ]
      },
      {
        title: "Install PyCharm Professional",
        code: "brew install --cask pycharm",
        description: "<strong>PyCharm Professional</strong> is JetBrains' full-featured Python IDE with Jupyter notebook integration, scientific data viewer, database tools, and remote interpreter support. The free <em>Community Edition</em> covers core Python development without the data science extras.",
        links: [
          { label: "PyCharm Official Site", url: "https://www.jetbrains.com/pycharm/" },
          { label: "PyCharm vs VS Code", url: "https://www.jetbrains.com/pycharm/compare/" }
        ]
      },
      {
        title: "Essential VS Code Extensions",
        code: "code --install-extension ms-python.python\ncode --install-extension ms-dotnettools.csharp\ncode --install-extension ms-dotnettools.csdevkit\ncode --install-extension ms-python.pylint\ncode --install-extension ms-python.black-formatter\ncode --install-extension ms-toolsai.jupyter\ncode --install-extension ms-vscode.vscode-json\ncode --install-extension ms-python.isort\ncode --install-extension charliermarsh.ruff",
        description: "What each extension does: <strong>ms-python.python</strong> — core Python language support. <strong>ms-dotnettools.csdevkit</strong> — Microsoft's official C# tools. <strong>ms-toolsai.jupyter</strong> — run Jupyter notebooks inside VS Code. <strong>charliermarsh.ruff</strong> — extremely fast Python linter (replaces pylint/flake8). <strong>ms-python.black-formatter</strong> — auto-formats Python code on save. <strong>ms-python.isort</strong> — automatically sorts Python imports.",
        links: [
          { label: "VS Code Python Tutorial", url: "https://code.visualstudio.com/docs/python/python-tutorial" },
          { label: "C# in VS Code", url: "https://code.visualstudio.com/docs/languages/csharp" },
          { label: "Ruff – The Fast Linter", url: "https://docs.astral.sh/ruff/" }
        ]
      }
    ]
  },
  {
    phase: 6,
    title: "LLM Development Tools",
    steps: [
      {
        title: "Install Ollama",
        code: "brew install ollama",
        description: "<strong>Ollama</strong> lets you run large language models (LLMs) locally on your Mac — no internet required, no API costs, and your data never leaves your machine. It provides both a CLI for chatting and a REST API compatible with the OpenAI format, so you can swap local models into any OpenAI-based app.",
        links: [
          { label: "Ollama Official Site", url: "https://ollama.ai" },
          { label: "Ollama on GitHub", url: "https://github.com/ollama/ollama" },
          { label: "Browse Available Models", url: "https://ollama.ai/library" }
        ]
      },
      {
        title: "Start Ollama Service",
        code: "brew services start ollama",
        description: "This registers Ollama as a <em>launchd</em> background service that starts automatically at login. It runs silently and listens for requests on <code>http://localhost:11434</code>.",
        tip: "Verify Ollama is running: <code>curl http://localhost:11434</code> — should respond with <em>Ollama is running</em>. Check service status with <code>brew services list</code>."
      },
      {
        title: "Install LLM Models",
        code: "ollama pull llama2:7b\nollama pull codellama:7b\nollama pull mistral:7b",
        description: "<strong>Llama 2 7B</strong> — Meta's open-source general-purpose model, good for Q&amp;A and text tasks. <strong>Code Llama 7B</strong> — a Llama 2 variant fine-tuned specifically for code generation, explanation, and debugging. <strong>Mistral 7B</strong> — a highly efficient French-built model that outperforms Llama 2 13B while using less memory — the best quality-per-GB option.",
        note: "7B models each require ~4GB RAM. On a 16GB Mac, run one at a time comfortably. With 32GB+ RAM, consider 13B models for meaningfully better output quality.",
        links: [
          { label: "Ollama Model Library", url: "https://ollama.ai/library" },
          { label: "Meta's Llama 2", url: "https://ai.meta.com/llama/" },
          { label: "Mistral AI", url: "https://mistral.ai" }
        ],
        tip: "Start an interactive chat: <code>ollama run llama2:7b</code>. Get coding help: <code>ollama run codellama:7b</code>. Ask a one-shot question without entering the chat: <code>ollama run mistral:7b 'Explain async/await in Python in one paragraph'</code>"
      },
      {
        title: "Install LM Studio",
        code: "brew install --cask lm-studio",
        description: "<strong>LM Studio</strong> is a graphical desktop app for discovering, downloading, and running LLMs locally. It includes a ChatGPT-style chat interface and an OpenAI-compatible local API server. It's the best starting point if you prefer a visual interface over the command line.",
        links: [
          { label: "LM Studio Official Site", url: "https://lmstudio.ai" },
          { label: "LM Studio Model Hub", url: "https://lmstudio.ai/models" }
        ]
      },
      {
        title: "Install GPT4All",
        code: "brew install --cask gpt4all",
        description: "<strong>GPT4All</strong> is an open-source local AI platform with a desktop chat UI and a Python SDK. It curates models specifically optimized for consumer hardware and offers a simple API for embedding LLM calls into your own Python scripts.",
        links: [
          { label: "GPT4All Official Site", url: "https://gpt4all.io" },
          { label: "GPT4All Python SDK Docs", url: "https://docs.gpt4all.io/gpt4all_python/home.html" }
        ]
      }
    ]
  },
  {
    phase: 7,
    title: "ML/AI Python Environment",
    steps: [
      {
        title: "Create ML Environment",
        code: "conda create -n llm-dev python=3.11\nconda activate llm-dev",
        description: "A dedicated <strong>conda environment</strong> completely isolates your ML packages from all other projects. This prevents version conflicts — e.g. one project can use PyTorch 2.0 while another uses 1.13 — and makes your environment fully reproducible and shareable.",
        tip: "Essential conda commands: <code>conda env list</code> (list all environments), <code>conda activate llm-dev</code> (switch to this env), <code>conda env export &gt; environment.yml</code> (snapshot the environment to share with others)."
      },
      {
        title: "Install Core Libraries",
        code: "conda install numpy pandas matplotlib seaborn scikit-learn jupyter notebook",
        description: "<strong>NumPy</strong> — fast multi-dimensional arrays, the foundation of all scientific Python. <strong>Pandas</strong> — DataFrame for tabular data (think Excel in Python). <strong>Matplotlib/Seaborn</strong> — charts and visualizations. <strong>scikit-learn</strong> — classical ML algorithms (regression, classification, clustering, dimensionality reduction). <strong>Jupyter</strong> — interactive notebooks that mix code, output, and markdown in one document.",
        links: [
          { label: "NumPy Quickstart", url: "https://numpy.org/doc/stable/user/quickstart.html" },
          { label: "Pandas Getting Started", url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/" },
          { label: "scikit-learn Tutorials", url: "https://scikit-learn.org/stable/tutorial/" },
          { label: "Jupyter Docs", url: "https://docs.jupyter.org/en/latest/" }
        ],
        tip: "Launch a Jupyter notebook with <code>jupyter notebook</code> — it opens in your browser. You can run Python code interactively, see plots inline, and annotate with markdown. It's the standard tool for data exploration."
      },
      {
        title: "Install Deep Learning Frameworks",
        code: "pip install torch torchvision torchaudio\npip install tensorflow\npip install transformers\npip install datasets\npip install tokenizers",
        description: "<strong>PyTorch</strong> is the dominant framework for AI research and increasingly for production. On Apple Silicon Macs it uses the <strong>MPS backend</strong> to accelerate training on the built-in GPU. <strong>TensorFlow</strong> is Google's framework, widely used in production deployments. <strong>HuggingFace Transformers</strong> provides a unified API to thousands of pre-trained models (GPT, BERT, LLaMA, Mistral, Whisper) that you can use or fine-tune in a few lines of code.",
        links: [
          { label: "PyTorch Official", url: "https://pytorch.org" },
          { label: "PyTorch MPS (Apple Silicon GPU)", url: "https://pytorch.org/docs/stable/notes/mps.html" },
          { label: "HuggingFace Transformers Docs", url: "https://huggingface.co/docs/transformers" },
          { label: "HuggingFace Model Hub", url: "https://huggingface.co/models" }
        ],
        tip: "Test your Mac's GPU acceleration: open Python and run <code>import torch; print(torch.backends.mps.is_available())</code> — should print <code>True</code> on Apple Silicon."
      },
      {
        title: "Install LLM Tools",
        code: "pip install langchain openai anthropic\npip install huggingface-hub sentence-transformers\npip install chromadb faiss-cpu\npip install gradio streamlit",
        description: "<strong>LangChain</strong> — framework for building LLM-powered apps (chatbots, agents, RAG pipelines). <strong>Anthropic/OpenAI</strong> — official Python clients for Claude and GPT APIs. <strong>sentence-transformers</strong> — converts text into vector embeddings for similarity search. <strong>ChromaDB/FAISS</strong> — vector databases that store embeddings and retrieve the most similar ones (the core of RAG). <strong>Gradio/Streamlit</strong> — build shareable web UIs for your AI demos in minutes.",
        links: [
          { label: "LangChain Docs", url: "https://python.langchain.com/docs/introduction/" },
          { label: "Anthropic API Docs", url: "https://docs.anthropic.com" },
          { label: "OpenAI API Docs", url: "https://platform.openai.com/docs" },
          { label: "ChromaDB Docs", url: "https://docs.trychroma.com" },
          { label: "Gradio Quickstart", url: "https://www.gradio.app/guides/quickstart" },
          { label: "Streamlit Docs", url: "https://docs.streamlit.io" }
        ],
        tip: "What is RAG? <em>Retrieval-Augmented Generation</em> lets an LLM answer questions about your own documents. Your docs → embeddings → vector DB → at query time, find relevant chunks → send them as context to the LLM. This is the foundation of most real-world AI assistants."
      },
      {
        title: "Install Training Tools",
        code: "pip install accelerate peft bitsandbytes\npip install trl wandb",
        description: "<strong>PEFT</strong> enables <em>Parameter-Efficient Fine-Tuning</em> — methods like <strong>LoRA</strong> that fine-tune a large model by training only a tiny fraction of its parameters, making custom training feasible on consumer hardware. <strong>bitsandbytes</strong> provides 4-bit/8-bit quantization to run larger models in less RAM. <strong>TRL</strong> implements RLHF (Reinforcement Learning from Human Feedback — how ChatGPT is trained). <strong>Weights &amp; Biases</strong> tracks experiments, metrics, and model artifacts.",
        links: [
          { label: "HuggingFace PEFT Docs", url: "https://huggingface.co/docs/peft" },
          { label: "LoRA Explained (HuggingFace Blog)", url: "https://huggingface.co/blog/lora" },
          { label: "TRL Docs", url: "https://huggingface.co/docs/trl" },
          { label: "Weights & Biases", url: "https://wandb.ai" }
        ]
      }
    ]
  },
  {
    phase: 8,
    title: "Database Systems",
    steps: [
      {
        title: "Install PostgreSQL",
        code: "brew install postgresql@15\nbrew services start postgresql@15",
        description: "<strong>PostgreSQL</strong> is the most advanced open-source relational database — the industry standard for production web applications. It supports SQL, ACID transactions, JSON storage, full-text search, and (with the <strong>pgvector</strong> extension) can also serve as a vector store for AI applications.",
        links: [
          { label: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" },
          { label: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com" },
          { label: "pgvector — Vector Search for Postgres", url: "https://github.com/pgvector/pgvector" }
        ],
        tip: "Connect to your local database: <code>psql postgres</code>. Inside psql: <code>\\l</code> lists databases, <code>\\dt</code> lists tables, <code>\\q</code> exits. Create a database: <code>CREATE DATABASE myapp;</code>"
      },
      {
        title: "Install MongoDB",
        code: "brew tap mongodb/brew\nbrew install mongodb-community\nbrew services start mongodb-community",
        description: "<strong>MongoDB</strong> stores data as JSON-like <em>documents</em> instead of rows and columns. This flexible schema is ideal for rapidly evolving data structures, unstructured content, and storing LLM responses, embeddings, and chat history in a natural format.",
        links: [
          { label: "MongoDB Docs", url: "https://www.mongodb.com/docs/" },
          { label: "MongoDB University (free courses)", url: "https://university.mongodb.com" },
          { label: "MongoDB vs PostgreSQL", url: "https://www.mongodb.com/compare/mongodb-postgresql" }
        ],
        tip: "Connect with <code>mongosh</code>. Switch to a database: <code>use myapp</code>. Insert a document: <code>db.logs.insertOne({ model: 'llama2', prompt: 'hello', tokens: 42 })</code>. Query it: <code>db.logs.find()</code>"
      },
      {
        title: "Install Redis",
        code: "brew install redis\nbrew services start redis",
        description: "<strong>Redis</strong> is an ultra-fast in-memory data store used as a cache, session store, and message broker. In AI applications it's commonly used to cache LLM responses (so identical prompts don't incur repeat API costs), manage task queues, and store short-term conversation state.",
        links: [
          { label: "Redis Docs", url: "https://redis.io/docs/" },
          { label: "Redis for AI/LLM Use Cases", url: "https://redis.io/solutions/vector-database/" },
          { label: "Redis Data Types", url: "https://redis.io/docs/data-types/" }
        ],
        tip: "Connect with <code>redis-cli</code>. Set a key: <code>SET greeting 'hello'</code>. Get it: <code>GET greeting</code>. Set with expiry (60s TTL): <code>SETEX cache:response 60 'cached LLM response here'</code>"
      },
      {
        title: "Install SQLite",
        code: "brew install sqlite",
        description: "<strong>SQLite</strong> is a lightweight, serverless SQL database where the entire database is a single <code>.db</code> file — no server process needed. It's perfect for local development, prototyping, mobile apps, and desktop tools. SQLite is also the default database for Django and Flask during development.",
        links: [
          { label: "SQLite Official Docs", url: "https://www.sqlite.org/docs.html" },
          { label: "DB Browser for SQLite (GUI)", url: "https://sqlitebrowser.org" },
          { label: "When to use SQLite", url: "https://www.sqlite.org/whentouse.html" }
        ],
        tip: "Create and explore a database: <code>sqlite3 mydata.db</code>. Inside the shell: <code>.tables</code> lists tables, <code>.schema</code> shows structure, <code>.quit</code> exits. Python has sqlite3 built-in: <code>import sqlite3</code> — no install needed."
      }
    ]
  },
  {
    phase: 9,
    title: "VS Code for .NET Development (Coming from Visual Studio 2022)",
    steps: [
      {
        title: "C# Dev Kit — Your Solution Explorer on macOS",
        description: "C# Dev Kit (installed in Phase 5) is Microsoft's official extension that brings the core Visual Studio experience into VS Code. It adds a <strong>Solution Explorer</strong> panel, project-level IntelliSense, NuGet package management, an integrated test runner, and hot reload — essentially VS 2022-lite running on macOS. This is the key extension that makes VS Code a viable daily driver for large .NET solutions.",
        links: [
          { label: ".NET Development in VS Code", url: "https://code.visualstudio.com/docs/languages/dotnet" },
          { label: "C# Dev Kit FAQ", url: "https://code.visualstudio.com/docs/csharp/cs-dev-kit-faq" },
          { label: "C# Dev Kit on Marketplace", url: "https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit" }
        ],
        tip: "Open the Solution Explorer with <code>⌘⇧P</code> → type <em>Focus on Solution Explorer</em>, or click the <strong>{}</strong> icon in the Activity Bar (left sidebar). Use <code>File → Open Folder</code> on your repo root and C# Dev Kit will auto-detect the <code>.sln</code> file and load all projects. Right-click any project for Build, Add Reference, Manage NuGet Packages, and Set as Startup Project — the same context menu as VS 2022."
      },
      {
        title: "Opening Large Multi-Project Solutions",
        description: "Unlike VS 2022 which loads all projects eagerly at startup, VS Code with C# Dev Kit uses <em>lazy loading</em> — project metadata resolves on demand. This makes opening a 60-project solution significantly faster. Your existing <code>.sln</code> file, project references, NuGet packages, and build configurations all carry over from Visual Studio without any changes.",
        code: "# Open the solution folder (not the .sln file directly)\ncode /path/to/your/solution-root\n\n# Or from inside the folder in Terminal:\ncode .\n\n# Build the whole solution from the terminal\ndotnet build MySolution.sln\n\n# Build a specific project\ndotnet build src/MyProject/MyProject.csproj\n\n# Run tests across the whole solution\ndotnet test MySolution.sln",
        links: [
          { label: "Working with C# in VS Code", url: "https://code.visualstudio.com/docs/languages/csharp" },
          { label: "dotnet CLI Reference", url: "https://docs.microsoft.com/en-us/dotnet/core/tools/" },
          { label: "Managing NuGet in VS Code", url: "https://code.visualstudio.com/docs/csharp/package-management" }
        ],
        tip: "If VS Code prompts <em>'Select the project to launch'</em> when you press F5, it found multiple runnable projects — this is equivalent to VS 2022's startup project selector. Pin your default via <code>⌘⇧P</code> → <em>Set Startup Project</em>."
      },
      {
        title: "Multi-Root Workspaces — Multiple Repos in One Window",
        description: "Since your projects span multiple GitHub repositories, VS Code <strong>Workspaces</strong> are your answer. A <code>.code-workspace</code> file lists multiple repository folders that open together in a single VS Code window — each repo remains independent for Git, but you get unified search, navigation, and a combined Source Control panel across all of them. Save this file to a folder that sits alongside all your repos (e.g. <code>~/dev/my-projects.code-workspace</code>) and open it with <code>code my-projects.code-workspace</code>.",
        code: "// ~/dev/my-projects.code-workspace\n// Open with: code ~/dev/my-projects.code-workspace\n{\n  \"folders\": [\n    { \"name\": \"Core Services\",    \"path\": \"./core-services\" },\n    { \"name\": \"Web API\",          \"path\": \"./web-api\" },\n    { \"name\": \"Web App\",          \"path\": \"./web-app\" },\n    { \"name\": \"Shared Libraries\", \"path\": \"./shared-libs\" },\n    { \"name\": \"Console Tools\",    \"path\": \"./console-tools\" }\n  ],\n  \"settings\": {\n    \"dotnet.defaultSolution\": \"core-services/CoreServices.sln\",\n    \"editor.formatOnSave\": true,\n    \"files.exclude\": { \"**/bin\": true, \"**/obj\": true }\n  }\n}",
        links: [
          { label: "VS Code Multi-Root Workspaces", url: "https://code.visualstudio.com/docs/editor/multi-root-workspaces" },
          { label: "Workspace Settings Reference", url: "https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings" }
        ],
        tip: "The <code>files.exclude</code> setting hides <code>bin/</code> and <code>obj/</code> folders from the Explorer panel across all repos — the same behavior as VS 2022. Add <code>\"**/node_modules\": true</code> if any repos have frontend projects."
      },
      {
        title: "Run & Debug Configurations (launch.json)",
        description: "VS Code uses a <code>.vscode/launch.json</code> file for run and debug configurations — the equivalent of VS 2022's project properties debug settings. C# Dev Kit <strong>auto-generates</strong> this file the first time you press <kbd>F5</kbd> on a project. For finer control over Web APIs, console apps, and worker services, create it manually. The example below covers the two most common project types.",
        code: "// .vscode/launch.json — place this in your solution root folder\n{\n  \"version\": \"0.2.0\",\n  \"configurations\": [\n    {\n      \"name\": \"Launch Web API\",\n      \"type\": \"coreclr\",\n      \"request\": \"launch\",\n      \"preLaunchTask\": \"build\",\n      \"program\": \"${workspaceFolder}/src/MyApi/bin/Debug/net8.0/MyApi.dll\",\n      \"cwd\": \"${workspaceFolder}/src/MyApi\",\n      \"env\": { \"ASPNETCORE_ENVIRONMENT\": \"Development\" },\n      \"serverReadyAction\": {\n        \"action\": \"openExternally\",\n        \"pattern\": \"Now listening on: (https?://\\\\S+)\"\n      }\n    },\n    {\n      \"name\": \"Launch Console App\",\n      \"type\": \"coreclr\",\n      \"request\": \"launch\",\n      \"preLaunchTask\": \"build\",\n      \"program\": \"${workspaceFolder}/src/MyConsoleApp/bin/Debug/net8.0/MyConsoleApp.dll\",\n      \"cwd\": \"${workspaceFolder}/src/MyConsoleApp\",\n      \"console\": \"integratedTerminal\"\n    }\n  ]\n}",
        links: [
          { label: "VS Code Debugging Docs", url: "https://code.visualstudio.com/docs/editor/debugging" },
          { label: ".NET Debugging in VS Code", url: "https://code.visualstudio.com/docs/csharp/debugging" },
          { label: "launch.json Attribute Reference", url: "https://code.visualstudio.com/docs/editor/debugging#_launchjson-attributes" }
        ],
        tip: "<strong>Hot Reload</strong> works for ASP.NET Core projects: edit C# code while the app is running and changes apply without a full restart — press <code>⌘⇧P</code> → <em>dotnet: Hot Reload</em> to trigger manually, or it applies on save automatically. Breakpoints, watch windows, the call stack panel, and the Variables panel all work identically to VS 2022."
      },
      {
        title: "Git & GitHub Across Multiple Repositories",
        description: "VS Code's built-in Source Control panel (<code>⌘⇧G</code>) shows commits, diffs, and staged changes for all open workspace repositories in one place, grouped by repo. <strong>GitLens</strong> adds inline blame annotations, a visual branch/history graph, and rich commit search. <strong>GitHub Pull Requests</strong> brings PR creation, review, and merging directly into VS Code — no browser switching needed. <strong>Git Graph</strong> provides the visual branch history view analogous to VS 2022's Git Repository window.",
        code: "code --install-extension eamodio.gitlens\ncode --install-extension GitHub.vscode-pull-request-github\ncode --install-extension mhutchie.git-graph",
        links: [
          { label: "VS Code Source Control Docs", url: "https://code.visualstudio.com/docs/sourcecontrol/overview" },
          { label: "GitLens Extension", url: "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens" },
          { label: "GitHub Pull Requests Extension", url: "https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github" },
          { label: "Git Graph Extension", url: "https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph" }
        ],
        tip: "In the Source Control panel, each repository appears as a collapsible group. You can stage, commit, and push to different repos independently from the same panel — useful when a refactor touches files across multiple repos simultaneously."
      },
      {
        title: "Keyboard Shortcuts — Visual Studio 2022 → VS Code macOS",
        description: "Most VS 2022 muscle memory translates directly to VS Code on macOS: swap <code>Ctrl</code> for <code>⌘</code> and most shortcuts just work. The main exceptions are document formatting and navigate back/forward. You can also install the Visual Studio Keymap extension (<code>ms-vscode.vs-keybindings</code>) to remap everything automatically.<br><br><table class='shortcut-table'><thead><tr><th>Action</th><th>Visual Studio 2022 (Windows)</th><th>VS Code (macOS)</th></tr></thead><tbody><tr><td>Build Solution</td><td>Ctrl+Shift+B</td><td>⌘⇧B</td></tr><tr><td>Start Debugging</td><td>F5</td><td>F5</td></tr><tr><td>Run Without Debug</td><td>Ctrl+F5</td><td>⌃F5</td></tr><tr><td>Stop Debugging</td><td>Shift+F5</td><td>⇧F5</td></tr><tr><td>Step Over</td><td>F10</td><td>F10</td></tr><tr><td>Step Into</td><td>F11</td><td>F11</td></tr><tr><td>Step Out</td><td>Shift+F11</td><td>⇧F11</td></tr><tr><td>Go to Definition</td><td>F12</td><td>F12</td></tr><tr><td>Peek Definition</td><td>Alt+F12</td><td>⌥F12</td></tr><tr><td>Find All References</td><td>Shift+F12</td><td>⇧F12</td></tr><tr><td>Rename Symbol</td><td>F2</td><td>F2</td></tr><tr><td>Quick Fix / Lightbulb</td><td>Ctrl+.</td><td>⌘.</td></tr><tr><td>Format Document</td><td>Ctrl+K, Ctrl+D</td><td>⇧⌥F</td></tr><tr><td>Toggle Line Comment</td><td>Ctrl+K, Ctrl+C</td><td>⌘/</td></tr><tr><td>Command Palette</td><td>Ctrl+Shift+P</td><td>⌘⇧P</td></tr><tr><td>Go to File</td><td>Ctrl+T</td><td>⌘P</td></tr><tr><td>Find in All Files</td><td>Ctrl+Shift+F</td><td>⌘⇧F</td></tr><tr><td>Solution / Explorer</td><td>Ctrl+Alt+L</td><td>⌘⇧E</td></tr><tr><td>Navigate Back</td><td>Ctrl+-</td><td>⌃-</td></tr><tr><td>Navigate Forward</td><td>Ctrl+Shift+-</td><td>⌃⇧-</td></tr><tr><td>Open Integrated Terminal</td><td>Ctrl+`</td><td>⌃`</td></tr><tr><td>Split Editor</td><td>Ctrl+\\</td><td>⌘\\</td></tr><tr><td>Close Tab</td><td>Ctrl+F4</td><td>⌘W</td></tr><tr><td>Reopen Closed Tab</td><td>Ctrl+Shift+T</td><td>⌘⇧T</td></tr></tbody></table>",
        links: [
          { label: "VS Code macOS Keyboard Shortcuts (PDF)", url: "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf" },
          { label: "Visual Studio Keymap Extension", url: "https://marketplace.visualstudio.com/items?itemName=ms-vscode.vs-keybindings" },
          { label: "Customize Keybindings in VS Code", url: "https://code.visualstudio.com/docs/getstarted/keybindings" }
        ],
        tip: "Install the Visual Studio Keymap to automatically remap VS 2022 shortcuts: <code>code --install-extension ms-vscode.vs-keybindings</code>. You can always view and override any shortcut with <code>⌘K ⌘S</code> (open Keyboard Shortcuts editor)."
      },
      {
        title: "Additional Extensions for Enterprise .NET Development",
        description: "Beyond the basics installed in Phase 5, these fill the gaps you'll notice coming from a large Visual Studio solution — REST API testing, richer error display, NuGet management, Docker, and XML support for <code>.csproj</code> and config files.",
        code: "# Inline error display — shows errors at the end of the problematic line\ncode --install-extension usernamehw.errorlens\n\n# REST Client — test Web API endpoints from a .http file in your repo\ncode --install-extension humao.rest-client\n\n# NuGet Package Manager GUI — browse and update NuGet packages visually\ncode --install-extension aliasadidev.nugetpackagemanagergui\n\n# Docker support — build, run, and manage containers from VS Code\ncode --install-extension ms-azuretools.vscode-docker\n\n# XML tools — smart editing for .csproj, web.config, app.config\ncode --install-extension redhat.vscode-xml\n\n# File icons — makes the Explorer panel easier to navigate\ncode --install-extension pkief.material-icon-theme",
        links: [
          { label: "REST Client Extension", url: "https://marketplace.visualstudio.com/items?itemName=humao.rest-client" },
          { label: "Error Lens Extension", url: "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens" },
          { label: "NuGet Package Manager GUI", url: "https://marketplace.visualstudio.com/items?itemName=aliasadidev.nugetpackagemanagergui" },
          { label: "Docker Extension", url: "https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker" }
        ],
        tip: "REST Client lets you create a <code>requests.http</code> file in your API repo containing saved HTTP calls — click <em>Send Request</em> above any call to test your endpoints instantly. Commit this file so the whole team has a shared set of API test calls, without needing Postman."
      },
      {
        title: "Azure Storage Explorer — macOS Setup & .NET 10 Fix",
        description: "Microsoft Azure Storage Explorer is the GUI tool for browsing and managing Azure Blob, Queue, Table, and File storage — a common tool for anyone coming from a Windows Azure development workflow. On macOS it requires <strong>.NET 10</strong> for its authentication library (MSAL), and macOS's Gatekeeper will silently kill its authentication helper process unless the quarantine flag is cleared. Both issues must be fixed before it will start successfully.",
        code: "# Step 1 — Install Azure Storage Explorer\nbrew install --cask microsoft-azure-storage-explorer\n\n# Step 2 — Install .NET 10 runtime alongside your existing .NET\n# (Homebrew's dotnet-sdk cask is still on .NET 9 as of this writing)\ncurl -fsSL https://dot.net/v1/dotnet-install.sh -o dotnet-install.sh\nchmod +x dotnet-install.sh\nsudo bash dotnet-install.sh --channel 10.0 --install-dir /usr/local/share/dotnet\nrm dotnet-install.sh\n\n# Verify .NET 10 is now present\ndotnet --list-runtimes | grep 10\n\n# Step 3 — Remove the macOS quarantine flag that causes exit code 130 (SigInt)\nsudo xattr -rd com.apple.quarantine \"/Applications/Microsoft Azure Storage Explorer.app\"\n\n# Step 4 — Explicitly approve with Gatekeeper (run if it still fails after Step 3)\nsudo spctl --add \"/Applications/Microsoft Azure Storage Explorer.app\"",
        links: [
          { label: "Azure Storage Explorer Download", url: "https://azure.microsoft.com/en-us/products/storage/storage-explorer" },
          { label: "Storage Explorer Troubleshooting Guide", url: "https://learn.microsoft.com/en-us/azure/storage/common/storage-explorer-troubleshooting" },
          { label: ".NET 10 Install Script Docs", url: "https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-install-script" }
        ],
        note: "The --install-dir flag installs .NET 10 alongside your existing .NET 9 — both versions coexist and neither is removed. The dotnet-install.sh script is Microsoft's official method for installing specific .NET versions that aren't yet available in Homebrew.",
        tip: "<strong>Why exit code 130 (SigInt)?</strong> macOS quarantines all apps downloaded from the internet. Storage Explorer's authentication helper is a separate child process that macOS silently kills with SIGINT before it can start. The <code>xattr</code> command strips that quarantine attribute from the entire app bundle, allowing all child processes to run."
      },
      {
        title: "VS Code vs JetBrains Rider — Choosing for Large Solutions",
        description: "With a 60-project solution, it's worth knowing when to reach for each tool. <strong>VS Code + C# Dev Kit</strong> is free, fast to start, and excels at day-to-day editing, Git work, and mixed C#/frontend projects. <strong>JetBrains Rider</strong> is the closer equivalent to Visual Studio 2022: it handles very large solutions more robustly, has superior solution-wide refactoring (rename across 60 projects instantly), a more faithful debugger UX, and the full ReSharper code analysis engine built in — but costs ~$249/year after the 30-day trial (free for students and open-source contributors). <strong>Practical recommendation:</strong> use VS Code as your daily driver and reach for Rider for complex cross-project refactors or when you need VS 2022-level code intelligence on your biggest solution.",
        links: [
          { label: "Rider vs VS Code for .NET", url: "https://www.jetbrains.com/rider/compare/" },
          { label: "Rider Pricing & Free Options", url: "https://www.jetbrains.com/rider/buy/" },
          { label: "Rider — Working with Large Solutions", url: "https://www.jetbrains.com/help/rider/Opening_and_closing_solutions.html" }
        ]
      }
    ]
  },
  {
    phase: 10,
    title: "Deploying to Azure Static Websites",
    steps: [
      {
        title: "What's Changed Since 2018 — Azure Hosting Options Today",
        description: "The original approach (Azure Blob Storage Static Website, Storage Explorer drag-and-drop, Azure DevOps File Copy task v2 preview) is outdated. Here's the current landscape:<br><br><strong>Azure Static Web Apps</strong> (launched 2020, now GA) — the recommended service for Vue/React/Angular apps. It connects directly to GitHub, auto-generates a GitHub Actions workflow, deploys on every push, and includes a global CDN, custom domains, free TLS, and preview environments for pull requests — all on a <em>free tier</em>.<br><br><strong>Azure Blob Storage Static Website</strong> — still valid and now fully GA (no longer preview). Best when you need direct control over storage or are integrating with an existing account. Requires manual CI/CD setup. The old Storage Explorer drag-and-drop approach is replaced by <code>az storage blob upload-batch</code>.<br><br>The steps below cover both methods using the Azure CLI — no portal clicking required.",
        links: [
          { label: "Azure Static Web Apps Docs", url: "https://learn.microsoft.com/en-us/azure/static-web-apps/" },
          { label: "Azure Static Web Apps Pricing (Free Tier)", url: "https://azure.microsoft.com/en-us/pricing/details/app-service/static/" },
          { label: "Azure Blob Storage Static Website Docs", url: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website" }
        ]
      },
      {
        title: "Install Azure CLI and Sign In",
        description: "The <strong>Azure CLI</strong> (<code>az</code>) is the command-line tool for creating and managing all Azure resources from macOS. It replaces navigating the Azure portal for most operations and enables repeatable, scriptable deployments.",
        code: "# Install Azure CLI\nbrew install azure-cli\n\n# Verify installation\naz --version\n\n# Sign in — opens a browser window for authentication\naz login\n\n# If you have multiple Azure subscriptions, set the one to use\naz account list --output table\naz account set --subscription \"Your Subscription Name\"",
        links: [
          { label: "Azure CLI Installation Docs", url: "https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-macos" },
          { label: "Azure CLI Command Reference", url: "https://learn.microsoft.com/en-us/cli/azure/reference-index" }
        ],
        tip: "Run <code>az account show</code> at any time to confirm which subscription is active. If <code>az login</code> opens a blank browser window, try <code>az login --use-device-code</code> instead."
      },
      {
        title: "Build the App and Configure SPA Routing",
        description: "Vite bundles, minifies, and tree-shakes everything into a <code>dist/</code> folder. One critical extra step for Vue Router apps: both Azure hosting options need a routing rule that serves <code>index.html</code> for all paths — otherwise a direct link to <code>/guide</code> returns a 404 because the server looks for a real file at that path. This project already has a <code>staticwebapp.config.json</code> in <code>public/</code> (Vite copies the entire <code>public/</code> folder to <code>dist/</code> at build time) that handles this for Azure Static Web Apps.",
        code: "# Build for production — output goes to dist/\nnpm run build\n\n# Preview the production build locally before deploying\n# Serves at http://localhost:4173\nnpm run preview\n\n# Confirm the routing config made it into the build output\ncat dist/staticwebapp.config.json",
        links: [
          { label: "Azure Static Web Apps — Route Configuration", url: "https://learn.microsoft.com/en-us/azure/static-web-apps/configuration" },
          { label: "Vite Static Asset Handling", url: "https://vite.dev/guide/assets.html#the-public-directory" }
        ],
        tip: "Test navigation in the preview build: visit <code>http://localhost:4173/guide</code> directly (not by clicking a link). If it loads, your routing config is correct. If you get a 404, the <code>staticwebapp.config.json</code> is missing from <code>dist/</code>."
      },
      {
        title: "Deploy with Azure Static Web Apps (Recommended)",
        description: "<strong>Azure Static Web Apps</strong> is the simplest path to production. The <code>az staticwebapp create</code> command connects to your GitHub repo, creates a GitHub Actions workflow file in your repository, and automatically deploys on every push to <code>main</code>. The free tier includes 100 GB bandwidth/month, custom domains, free TLS, and staging environments for pull requests.",
        code: "# 1. Create a resource group (logical container for Azure resources)\naz group create \\\n  --name my-vue-rg \\\n  --location eastus2\n\n# 2. Create the Static Web App — opens browser to authorize GitHub access\n#    Replace YOUR_USERNAME and YOUR_REPO with your actual GitHub details\naz staticwebapp create \\\n  --name my-vue-app \\\n  --resource-group my-vue-rg \\\n  --source https://github.com/YOUR_USERNAME/YOUR_REPO \\\n  --location \"eastus2\" \\\n  --branch main \\\n  --app-location \"/\" \\\n  --output-location \"dist\" \\\n  --login-with-github\n\n# 3. Get your live URL\naz staticwebapp show \\\n  --name my-vue-app \\\n  --resource-group my-vue-rg \\\n  --query \"defaultHostname\" \\\n  --output tsv",
        links: [
          { label: "az staticwebapp create Reference", url: "https://learn.microsoft.com/en-us/cli/azure/staticwebapp" },
          { label: "Azure Static Web Apps — GitHub Actions Workflow", url: "https://learn.microsoft.com/en-us/azure/static-web-apps/github-actions-workflow" },
          { label: "Add a Custom Domain", url: "https://learn.microsoft.com/en-us/azure/static-web-apps/custom-domain" }
        ],
        tip: "After running <code>az staticwebapp create</code>, check your GitHub repo — a <code>.github/workflows/azure-static-web-apps-*.yml</code> file will have been committed automatically. Every push to <code>main</code> triggers a build and deploy. Every pull request gets its own preview URL so you can review changes before merging."
      },
      {
        title: "Deploy to Azure Blob Storage Static Website (Manual Approach)",
        description: "This is the updated version of the original 2018 method — entirely via the Azure CLI. Use this when you need direct control over storage configuration, are integrating with an existing storage account, or want to manage CI/CD independently. The Static Website feature on Blob Storage is now fully GA (no longer preview). Note: for Blob Storage you set the <strong>error document</strong> to <code>index.html</code> instead of using a <code>staticwebapp.config.json</code> — this achieves the same SPA routing fallback.",
        code: "# 1. Create a resource group and General-purpose v2 storage account\naz group create --name my-vue-rg --location eastus2\n\naz storage account create \\\n  --name myvueassets \\\n  --resource-group my-vue-rg \\\n  --sku Standard_LRS \\\n  --kind StorageV2\n\n# 2. Enable Static Website hosting\n#    Setting 404-document to index.html makes Vue Router handle unknown paths\naz storage blob service-properties update \\\n  --account-name myvueassets \\\n  --static-website \\\n  --index-document index.html \\\n  --404-document index.html\n\n# 3. Build the app\nnpm run build\n\n# 4. Upload the dist/ folder to the $web container\naz storage blob upload-batch \\\n  --account-name myvueassets \\\n  --source ./dist \\\n  --destination '$web' \\\n  --overwrite \\\n  --auth-mode login\n\n# 5. Get your live URL\naz storage account show \\\n  --name myvueassets \\\n  --resource-group my-vue-rg \\\n  --query \"primaryEndpoints.web\" \\\n  --output tsv",
        links: [
          { label: "az storage blob upload-batch Reference", url: "https://learn.microsoft.com/en-us/cli/azure/storage/blob#az-storage-blob-upload-batch" },
          { label: "Static Website Hosting in Azure Storage", url: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-how-to" },
          { label: "AzCopy — Faster Alternative for Large Uploads", url: "https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10" }
        ],
        note: "The storage account name (e.g. 'myvueassets') must be globally unique across all of Azure and 3–24 lowercase alphanumeric characters only. Run az storage account check-name --name yourname to verify availability.",
        tip: "For large <code>dist/</code> folders or frequent deployments, <code>azcopy sync ./dist 'https://ACCOUNT.blob.core.windows.net/$web'</code> is faster than <code>upload-batch</code> — it only transfers files that have actually changed."
      },
      {
        title: "Automate Blob Storage Deployment with GitHub Actions",
        description: "If you chose the Blob Storage approach, use this GitHub Actions workflow to automatically build and deploy on every push to <code>main</code>. You'll need to create two GitHub repository secrets: <code>AZURE_CREDENTIALS</code> (a service principal JSON) and <code>STORAGE_ACCOUNT_NAME</code>.",
        code: "# Step 1 — Create a service principal for GitHub Actions to authenticate with Azure\n#           Copy the entire JSON output — you'll paste it into GitHub Secrets\naz ad sp create-for-rbac \\\n  --name \"github-actions-vue-deploy\" \\\n  --role contributor \\\n  --scopes /subscriptions/YOUR_SUBSCRIPTION_ID/resourceGroups/my-vue-rg \\\n  --sdk-auth\n\n# Step 2 — Add secrets to your GitHub repo:\n#   AZURE_CREDENTIALS  = the full JSON output from the command above\n#   STORAGE_ACCOUNT_NAME = myvueassets (your storage account name)\n#   (GitHub repo → Settings → Secrets and variables → Actions → New secret)\n\n# Step 3 — Create the workflow file in your repo at:\n#   .github/workflows/deploy.yml\n\n# --- .github/workflows/deploy.yml ---\nname: Deploy to Azure Storage\non:\n  push:\n    branches: [main]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n          cache: 'npm'\n      - run: npm ci\n      - run: npm run build\n      - uses: azure/login@v2\n        with:\n          creds: ${{ secrets.AZURE_CREDENTIALS }}\n      - uses: azure/CLI@v2\n        with:\n          inlineScript: |\n            az storage blob upload-batch \\\n              --account-name ${{ secrets.STORAGE_ACCOUNT_NAME }} \\\n              --source ./dist \\\n              --destination '$web' \\\n              --overwrite \\\n              --auth-mode login",
        links: [
          { label: "GitHub Actions for Azure", url: "https://learn.microsoft.com/en-us/azure/developer/github/github-actions" },
          { label: "azure/login Action", url: "https://github.com/Azure/login" },
          { label: "Creating a Service Principal", url: "https://learn.microsoft.com/en-us/cli/azure/azure-cli-sp-tutorial-1" }
        ],
        tip: "The <code>azure/login@v2</code> action supports OpenID Connect (OIDC) federated credentials — a more secure alternative to storing the service principal JSON as a secret. See the <em>azure/login</em> docs for the OIDC setup, which eliminates the need for <code>AZURE_CREDENTIALS</code> entirely."
      }
    ]
  },
  {
    phase: 11,
    title: "Azure Development Workflow",
    steps: [
      {
        title: "Install Azure Developer Tools",
        description: "Three tools cover nearly all local Azure development needs. <strong>Azure Functions Core Tools</strong> lets you run and debug Azure Functions entirely offline. <strong>Azure Developer CLI (<code>azd</code>)</strong> scaffolds full-stack Azure architectures and handles provisioning + deployment in one command. <strong>Azurite</strong> is a local emulator for Azure Storage (Blob, Queue, Table) so you never need a real storage account during development.",
        code: "# Azure Functions Core Tools v4\nbrew tap azure/functions\nbrew install azure-functions-core-tools@4\n\n# Azure Developer CLI (azd)\nbrew tap azure/azd && brew install azd\nazd version   # verify\n\n# Azurite — local Azure Storage emulator\nnpm install -g azurite\nazurite --version   # verify\n\n# Start Azurite in a terminal (keep running while developing)\nazurite --location ~/.azurite --debug ~/.azurite/debug.log",
        links: [
          { label: "Azure Functions Core Tools Docs", url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local" },
          { label: "Azure Developer CLI (azd) Docs", url: "https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/overview" },
          { label: "Azurite Storage Emulator", url: "https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azurite" }
        ],
        tip: "Run <code>azd auth login</code> once after installing — it authenticates <code>azd</code> separately from <code>az</code>. Both CLIs are needed for different workflows: <code>az</code> for fine-grained resource management, <code>azd</code> for full lifecycle (provision + deploy + monitor)."
      },
      {
        title: "Install Azure VS Code Extensions",
        description: "The Azure extension pack gives VS Code first-class support for deploying, debugging, and monitoring Azure resources without leaving the editor. The <strong>Azure Resources</strong> extension shows all your subscriptions and resources in the sidebar. The <strong>Azurite</strong> extension starts the local storage emulator with one click.",
        code: "# Install all essential Azure extensions at once\ncode --install-extension ms-azuretools.vscode-azurefunctions\ncode --install-extension ms-azuretools.vscode-azureresourcegroups\ncode --install-extension ms-azuretools.vscode-azurestorage\ncode --install-extension ms-azuretools.vscode-cosmosdb\ncode --install-extension Azurite.azurite\ncode --install-extension ms-dotnettools.csdevkit\n\n# Verify installed extensions\ncode --list-extensions | grep ms-azuretools",
        links: [
          { label: "Azure Tools Extension Pack", url: "https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack" },
          { label: "Azure Functions Extension", url: "https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions" },
          { label: "C# Dev Kit Extension", url: "https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit" }
        ],
        tip: "The <strong>C# Dev Kit</strong> extension brings Visual Studio–style Solution Explorer to VS Code — you can load a <code>.sln</code> file containing all 60 projects exactly as you would in Visual Studio 2022 on Windows. Each project appears in the sidebar with full IntelliSense and a <em>Run / Debug</em> button per project."
      },
      {
        title: "Add Azure SDK NuGet Packages (.NET)",
        description: "The Azure SDK for .NET follows a consistent pattern: each service has its own NuGet package under the <code>Azure.*</code> namespace, and they all share <code>Azure.Identity</code> for authentication. You never store connection strings in code — <code>DefaultAzureCredential</code> automatically picks up the right credential based on the environment (local dev → your <code>az login</code> account; production → Managed Identity).",
        code: "# Inside your .NET project directory\n# Core identity package — add to EVERY Azure project\ndotnet add package Azure.Identity\n\n# Pick the services you need\ndotnet add package Azure.Storage.Blobs\ndotnet add package Azure.Storage.Queues\ndotnet add package Azure.Security.KeyVault.Secrets\ndotnet add package Azure.AI.OpenAI\ndotnet add package Azure.Messaging.ServiceBus\ndotnet add package Microsoft.Extensions.Azure   # DI integration\n\n# Restore and build to confirm no version conflicts\ndotnet restore && dotnet build",
        links: [
          { label: "Azure SDK for .NET Overview", url: "https://learn.microsoft.com/en-us/dotnet/azure/sdk/azure-sdk-for-dotnet" },
          { label: "Azure.Identity Package", url: "https://learn.microsoft.com/en-us/dotnet/api/overview/azure/identity-readme" },
          { label: "Microsoft.Extensions.Azure DI Integration", url: "https://learn.microsoft.com/en-us/dotnet/azure/sdk/dependency-injection" }
        ],
        tip: "Use <code>Microsoft.Extensions.Azure</code> to register clients in your DI container: <code>builder.Services.AddAzureClients(b =&gt; b.AddBlobServiceClient(config[\"AzureStorage:Url\"]));</code>. This is the recommended pattern for ASP.NET Core Web APIs and Console Apps that target the same services you'd use from Visual Studio on Windows."
      },
      {
        title: "Add Azure SDK Packages (Python)",
        description: "The Azure SDK for Python mirrors the .NET SDK's structure — one package per service, all sharing <code>azure-identity</code> for passwordless authentication. This is essential if you do any Python scripting for Azure automation, data pipelines, or AI workloads.",
        code: "# Activate your conda or venv environment first\nconda activate myenv   # or: source .venv/bin/activate\n\n# Core identity — always required\npip install azure-identity\n\n# Common service packages\npip install azure-storage-blob\npip install azure-storage-queue\npip install azure-keyvault-secrets\npip install azure-ai-openai\npip install azure-servicebus\npip install azure-mgmt-resource   # for ARM/resource management\n\n# Pin versions for reproducibility\npip freeze > requirements.txt",
        links: [
          { label: "Azure SDK for Python Overview", url: "https://learn.microsoft.com/en-us/azure/developer/python/sdk/azure-sdk-overview" },
          { label: "azure-identity Package", url: "https://learn.microsoft.com/en-us/python/api/overview/azure/identity-readme" },
          { label: "Azure Storage Blob Python Quickstart", url: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-python" }
        ],
        tip: "Run <code>az login</code> once in your terminal before running any Python scripts locally. <code>DefaultAzureCredential</code> will automatically use your active <code>az</code> session — no environment variables, no secrets files needed during development."
      },
      {
        title: "Passwordless Authentication with DefaultAzureCredential",
        description: "<code>DefaultAzureCredential</code> is the single most important pattern to learn in Azure development. It tries a chain of credential sources in order: environment variables → workload identity → Managed Identity → Visual Studio Code → Azure CLI → Azure PowerShell. On your Mac during development it falls through to your <code>az login</code> session. In production on Azure it uses Managed Identity automatically — so the exact same code works in both environments with zero changes.",
        code: "// --- .NET Example ---\nusing Azure.Identity;\nusing Azure.Storage.Blobs;\n\n// Works locally (uses `az login`) and in Azure (uses Managed Identity)\nvar credential = new DefaultAzureCredential();\nvar blobClient = new BlobServiceClient(\n    new Uri(\"https://YOURACCOUNT.blob.core.windows.net\"),\n    credential);\n\n// --- Python Example ---\nfrom azure.identity import DefaultAzureCredential\nfrom azure.storage.blob import BlobServiceClient\n\ncredential = DefaultAzureCredential()\nblob_client = BlobServiceClient(\n    account_url=\"https://YOURACCOUNT.blob.core.windows.net\",\n    credential=credential\n)\n\n# --- Key Vault Example (.NET) ---\nusing Azure.Security.KeyVault.Secrets;\n\nvar secretClient = new SecretClient(\n    new Uri(\"https://YOUR-VAULT.vault.azure.net/\"),\n    new DefaultAzureCredential());\nKeyVaultSecret secret = await secretClient.GetSecretAsync(\"MySecret\");",
        links: [
          { label: "DefaultAzureCredential Overview", url: "https://learn.microsoft.com/en-us/dotnet/azure/sdk/authentication/credential-chains" },
          { label: "Passwordless Connections for Azure Services", url: "https://learn.microsoft.com/en-us/azure/developer/intro/passwordless-overview" },
          { label: "Managed Identity Overview", url: "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview" }
        ],
        tip: "Never put connection strings or storage keys in <code>appsettings.json</code> or environment variables for Azure services — use <code>DefaultAzureCredential</code> everywhere. Assign yourself the <strong>Storage Blob Data Contributor</strong> role on the storage account via the Azure portal (IAM → Add role assignment) so your local <code>az login</code> session has permission to read/write blobs."
      },
      {
        title: "Local Azure Functions Development",
        description: "Azure Functions Core Tools lets you create, run, and publish Azure Functions entirely from the terminal. The local development loop is: <code>func init</code> → write code → <code>func start</code> → test via HTTP or trigger → <code>func azure functionapp publish</code>. VS Code's Azure Functions extension adds GUI buttons for each of these steps and auto-attaches the debugger.",
        code: "# Create a new Functions project (choose dotnet-isolated or python)\nfunc init MyFunctionApp --worker-runtime dotnet-isolated\ncd MyFunctionApp\n\n# Scaffold a new function (HTTP trigger example)\nfunc new --name HttpExample --template \"HTTP trigger\" --authlevel anonymous\n\n# Start the local Functions host (hot-reloads on file save)\nfunc start\n# → Functions running at: http://localhost:7071/api/HttpExample\n\n# Test it\ncurl http://localhost:7071/api/HttpExample?name=World\n\n# Deploy to an existing Function App in Azure\nfunc azure functionapp publish YOUR_FUNCTION_APP_NAME\n\n# View live streaming logs after deploy\nfunc azure functionapp logstream YOUR_FUNCTION_APP_NAME",
        links: [
          { label: "Azure Functions Local Development", url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local" },
          { label: "Develop Functions Using VS Code", url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-vs-code" },
          { label: "Azure Functions .NET Isolated Worker", url: "https://learn.microsoft.com/en-us/azure/azure-functions/dotnet-isolated-process-guide" }
        ],
        tip: "For projects with many services, use <code>local.settings.json</code> (git-ignored by the Functions template) to store local connection strings — point blob triggers and queue triggers at <code>UseDevelopmentStorage=true</code> to use Azurite instead of a real Azure Storage account. This gives you a fully offline development loop."
      },
      {
        title: "Azure OpenAI Service (Local Setup)",
        description: "Azure OpenAI Service provides the same GPT-4, GPT-4o, and Embeddings models as OpenAI, but hosted inside your Azure tenant with enterprise security controls. You interact with it using the <code>Azure.AI.OpenAI</code> (.NET) or <code>openai</code> (Python) package pointed at your Azure endpoint. Store the endpoint and deployment name in Key Vault or environment variables — never hardcode them.",
        code: "// --- .NET Setup ---\n// 1. dotnet add package Azure.AI.OpenAI\nusing Azure;\nusing Azure.AI.OpenAI;\nusing Azure.Identity;\n\n// Passwordless auth using your az login session\nAzureOpenAIClient client = new(\n    new Uri(\"https://YOUR-RESOURCE.openai.azure.com/\"),\n    new DefaultAzureCredential());\n\nChatClient chatClient = client.GetChatClient(\"gpt-4o\"); // your deployment name\nChatCompletion completion = await chatClient.CompleteChatAsync(\n    [new UserChatMessage(\"Hello, summarize this for a developer.\")]\n);\nConsole.WriteLine(completion.Content[0].Text);\n\n# --- Python Setup ---\n# pip install openai azure-identity\nimport os\nfrom openai import AzureOpenAI\nfrom azure.identity import DefaultAzureCredential, get_bearer_token_provider\n\ntoken_provider = get_bearer_token_provider(\n    DefaultAzureCredential(),\n    \"https://cognitiveservices.azure.com/.default\"\n)\nclient = AzureOpenAI(\n    azure_endpoint=\"https://YOUR-RESOURCE.openai.azure.com/\",\n    azure_ad_token_provider=token_provider,\n    api_version=\"2024-12-01-preview\"\n)\nresponse = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=[{\"role\": \"user\", \"content\": \"Hello from Mac!\"}]\n)\nprint(response.choices[0].message.content)",
        links: [
          { label: "Azure OpenAI Service Quickstart", url: "https://learn.microsoft.com/en-us/azure/ai-services/openai/quickstart" },
          { label: "Azure.AI.OpenAI .NET Package", url: "https://learn.microsoft.com/en-us/dotnet/api/overview/azure/ai.openai-readme" },
          { label: "Authenticate to Azure OpenAI with Entra ID", url: "https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/managed-identity" },
          { label: "Azure OpenAI Models and Deployments", url: "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models" }
        ],
        tip: "Assign yourself the <strong>Cognitive Services OpenAI User</strong> role on your Azure OpenAI resource (portal → IAM → Add role assignment) to use <code>DefaultAzureCredential</code> locally. This avoids API keys entirely and matches how your production workloads should authenticate."
      }
    ]
  }
];

export const verificationScript = `#!/usr/bin/env python3
import sys
import subprocess

def check_installation():
    tools = [
        ('python', ['python', '--version']),
        ('dotnet', ['dotnet', '--version']),
        ('ollama', ['ollama', '--version']),
        ('git', ['git', '--version']),
        ('docker', ['docker', '--version']),
        ('poetry', ['poetry', '--version']),
        ('conda', ['conda', '--version']),
    ]

    for name, cmd in tools:
        try:
            result = subprocess.run(cmd, capture_output=True, text=True)
            print(f"✅ {name}: {result.stdout.strip()}")
        except FileNotFoundError:
            print(f"❌ {name}: Not installed")

if __name__ == "__main__":
    check_installation()`;

export const maintenanceCommands = [
  {
    title: "Update Homebrew packages",
    code: "brew update && brew upgrade"
  },
  {
    title: "Update Conda environment",
    code: "conda update --all"
  },
  {
    title: "Update Poetry dependencies",
    code: "poetry update"
  },
  {
    title: "Update .NET tools",
    code: "dotnet tool update -g"
  },
  {
    title: "Update Ollama models",
    code: "ollama pull $(ollama list | grep -v NAME | awk '{print $1}')"
  }
];

export const prerequisites = [
  "MacBook Pro with Apple Silicon (M1/M2/M3) recommended",
  "macOS Monterey (12.0) or later",
  "At least 16GB RAM (32GB+ recommended for LLM work)",
  "500GB+ free storage space"
];
