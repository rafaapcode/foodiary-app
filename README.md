# 🍽️ Foodiary

> Seu diário alimentar inteligente com análise nutricional por IA

**[🇺🇸 Read in English](README_EN.md)**

Foodiary é um aplicativo mobile inovador que transforma a forma como você registra suas refeições. Usando inteligência artificial, o app analisa fotos e descrições de áudio das suas refeições, fornecendo informações nutricionais detalhadas e ajudando você a manter o controle da sua alimentação de forma simples e eficiente.

## 📱 Sobre o App

O Foodiary permite que você registre suas refeições de duas maneiras práticas:
- **📸 Foto**: Tire uma foto da sua refeição e deixe a IA identificar os alimentos
- **🎤 Áudio**: Grave uma descrição falada do que você comeu

Após o registro, o app processa automaticamente as informações e fornece:
- Análise nutricional completa (calorias, proteínas, carboidratos e gorduras)
- Acompanhamento diário do progresso em relação às suas metas
- Histórico organizado de todas as suas refeições
- Estatísticas visuais do seu consumo nutricional

## ✨ Funcionalidades

- ✅ **Registro por Foto ou Áudio**: Registre suas refeições da forma mais conveniente para você
- ✅ **Análise Nutricional com IA**: Processamento automático para identificar alimentos e calcular valores nutricionais
- ✅ **Metas Personalizadas**: Defina e acompanhe suas metas nutricionais diárias
- ✅ **Perfil Customizado**: Configure seu perfil com idade, peso, altura, nível de atividade e objetivo (ganhar, perder ou manter peso)
- ✅ **Dashboard Interativo**: Visualize suas estatísticas nutricionais diárias com gráficos intuitivos
- ✅ **Histórico Completo**: Acesse todas as suas refeições registradas organizadas por data
- ✅ **Detalhes das Refeições**: Veja informações completas de cada refeição, incluindo lista de alimentos e valores nutricionais individuais
- ✅ **Autenticação Segura**: Sistema de login e cadastro para manter seus dados seguros

## 🛠️ Tecnologias Utilizadas

### Core
- **React Native** (0.81.5) - Framework para desenvolvimento mobile
- **Expo** (~54.0.30) - Plataforma de desenvolvimento e ferramentas
- **TypeScript** (~5.9.2) - Tipagem estática e maior segurança no código

### Navegação e Estado
- **React Navigation** - Gerenciamento de rotas e navegação
  - `@react-navigation/native` (^7.1.17)
  - `@react-navigation/native-stack` (^7.3.26)
- **TanStack Query** (^5.90.7) - Gerenciamento de estado assíncrono e cache

### UI e Experiência do Usuário
- **Expo Linear Gradient** - Gradientes visuais
- **Expo Blur** - Efeitos de blur
- **React Native Reanimated** (~4.1.1) - Animações fluidas
- **React Native Gesture Handler** (~2.28.0) - Gestos nativos
- **React Native SVG** - Gráficos vetoriais
- **Lucide React Native** - Biblioteca de ícones
- **@gorhom/bottom-sheet** - Componente de bottom sheet
- **@expo-google-fonts/host-grotesk** - Fonte personalizada

### Funcionalidades Nativas
- **Expo Camera** - Captura de fotos
- **Expo Audio** - Gravação e reprodução de áudio
- **Expo File System** - Manipulação de arquivos
- **@react-native-community/datetimepicker** - Seletor de data e hora

### Formulários e Validação
- **React Hook Form** (^7.65.0) - Gerenciamento de formulários
- **Zod** (^4.1.12) - Validação de schemas
- **@hookform/resolvers** - Integração entre React Hook Form e Zod

### Comunicação e Armazenamento
- **Axios** (^1.13.1) - Cliente HTTP para comunicação com API
- **AsyncStorage** - Armazenamento local persistente
- **React Native Base64** - Codificação/decodificação Base64

### Qualidade de Código
- **ESLint** (^9.35.0) - Linter para qualidade de código
- **TypeScript ESLint** - Regras específicas para TypeScript

## 📸 Screenshots & Vídeos

<!-- Adicione aqui as capturas de tela do app -->
### Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/cfd224f0-f711-4455-bf8e-d73e5e1e4c6b" alt="Tela Home" width="200"/>
  <img src="https://github.com/user-attachments/assets/26b9ec6b-a613-4a01-b6bd-b9fa3233d4bd" alt="Detalhes da Refeição audio" width="200"/>
  <img src="https://github.com/user-attachments/assets/a387d648-cd65-459e-a435-7f2f4761674f" alt="Detalhes da Refeição imagem" width="200"/>
  <img src="https://github.com/user-attachments/assets/9a4eb58c-0e17-473f-aa10-fdd15387ee97" alt="Gravar audio" width="200"/>
  <img src="https://github.com/user-attachments/assets/386e12a2-c678-47d2-a1f9-163f0030ea03" alt="Editar metas" width="200"/>
  <img src="https://github.com/user-attachments/assets/be07c48a-ac7a-4ee1-b85b-075845f7969a" alt="Editar perfil" width="200"/>
</p>

### Vídeo Demonstração

<!-- Adicione aqui o link ou embed do vídeo demonstrativo -->
<!-- Exemplo: -->
<!-- [![Vídeo Demonstração](./docs/thumbnail.png)](https://www.youtube.com/watch?v=seu-video) -->

## 📝 Licença

Este projeto foi desenvolvido como projeto pessoal.

---

<p align="center">
  Desenvolvido por Rafael Aparecido
</p>
