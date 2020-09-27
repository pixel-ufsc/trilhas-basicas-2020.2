<div align="center">
    <div>
        <img src=".github/logo.png" alt="Logo da Pixel"     width="200"/>
    </div>
</div>

# Boas-vindas 👋

Olá trainee, tudo bem? 😀 Espero que sim! Este repositório será utilizado durante o processo trainee para entregar as atividades que você concluir ao longo da Trilha Básica de HTML, CSS e JavaScript! Sendo assim, toda semana você deverá fazer no mínimo um **pull request** para este repositório enviando tudo o que você andou trabalhando durante a semana. Além disso, você também poderá encontrar neste repositório algumas informações úteis para sua jornada dentro das trilhas básicas, como por exemplo exercícios.

Ainda tem dúvidas? Mande uma mensagem lá no nosso slack #trilhas-basicas 😉

# Sua primeira atividade 💻

> Você deve ter assistido aos vídeos de Git antes de fazer este tutorial. Se você ainda não assistiu, por favor, assista-os antes de continuar!

A sua primeira atividade para iniciar a trilha básica do processo trainee de 2020.2 da Pixel, é criar um diretório com o seu nome e um arquivo ```<seu-nome>.md``` dentro do diretório criado neste repositório.

Para fazer isso, você deverá primeiro clonar este repositório em sua máquina. 

Vamos fazer isto! Primeiro você deve abrir o seu prompt de comando, entrar na pasta onde você quer que as informações do repositório sejam baixadas e executar o seguinte comando em seu terminal:

```sh
git clone https://github.com/pixel-ufsc/trilha-basica-2020.2 trilha-basica
```

Depois de aguardar alguns segundos, pronto! O repositório provavelmente foi clonado sem nenhum problema. (se por algum motivo ocorrer problemas durante essa etapa mande uma printscreen do erro em nosso canal no Slack ```trilhas-basicas```)

Agora vamos entrar dentro da pasta ```trilha-basica``` que foi criada durante o nosso processo de clonagem do repositório .

Para isso, execute o seguinte comando em seu terminal:

```sh
cd trilha-basica
```

Pronto! Você já está dentro da pasta do repositório e tudo deve estar certo até aqui, vamos conferir usando o comando ```ls``` no Linux ou ```dir``` no Windows.

Quando executado você deverá ser capaz de ver todos os arquivos e diretórios deste repositório.

---

Ótimo, você está indo muito bem até aqui! 🎈
Vamos agora criar uma nova **branch** com o seu nome, e em seguida, criar uma pasta e um arquivo dentro desta branch.

Execute:
```sh 
git checkout -b <seu-nome>
```

Lembre-se de trocar ```<seu-nome>``` pelo seu nome, por exemplo: ```git checkout -b higor```

Ótimo!

Agora vamos criar um diretório com o seu nome para continuar. Faça:

```sh 
mkdir <seu-nome>
```

Se tudo correu bem, um diretório com o seu nome foi criado. Para finalizar, vamos criar um arquivo [markdown](https://pt.wikipedia.org/wiki/Markdown) dentro deste diretório.

Use este comando para entrar no seu diretório
```sh
cd <seu-nome> 
```

Agora crie o arquivo

```sh
echo Hello World > hello.md
```

Pronto! Você criou um diretório com o seu nome e dentro dele criou um arquivo com o nome ```hello.md```.

Para finalizar vamos fazer um commit dessas alterações e enviar tudo para o GitHub

```sh
git add .
git commit -m "Criando diretório com meu nome"
git push origin <seu-nome>
```

Quando finalizar, atualize a página do repositório no GitHub e você verá sua branch criada e aguardando um pull request (ainda não o faça)

