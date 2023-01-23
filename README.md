# Overview

This project is a challenge for myself, to understand and apply microservices with `nodejs` and `express`

# Instructions

> Note: This project was develop entirely in a linux environment

1. Install [fnm](https://github.com/Schniz/fnm)

- Run command
  ```console
  curl -fsSL https://fnm.vercel.app/install | bash
  ```
- Open your `.zshrc` file and paste
  ```console
  eval "$(fnm env --use-on-cd)"
  ```
- Reload your terminal
  ```console
  source ~./zshrc
  ```
- Install node version
  ```console
  fnm ls-remote
  fnm install v18.13.0
  fnm default v18.13.0
  ```

2. Install [Minikube](https://minikube.sigs.k8s.io/docs/start/)

- [Quick guide here](https://www.linuxtechi.com/how-to-install-minikube-on-ubuntu/)

- Don't forget to enable `ingress-nginx`
  ```console
  minikube addons enable ingress
  ```

3. Clone the repo use [ssh method recommended](https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

- Run the command

  ```console
  git clone git@github.com:Kiyosh31/bloc-microservices.git
  ```

- Get into the project and install the dependencies
  ```console
  ./install-dependencies.sh
  ```

4. Run the project

   ```console
   skaffold dev
   ```
