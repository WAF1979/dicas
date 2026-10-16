/**
 * CENTRAL DE AJUDA & SOLUÇÃO DE ERROS - APP.JS
 * (FLUXO INTERATIVO ENTRE BOTÃO DESTACADO, MODAL DE MENU DE AJUDA COM BUSCA INTELIGENTE E MODAL DE SOLUÇÃO)
 */

// 1. BASE DE DADOS DE ERROS & DIAGNÓSTICOS DO SISTEMA (EM ORDEM ALFABÉTICA)
const HELP_DATA = [
  {
    id: 'update-checklist',
    category: 'checklist',
    categoryLabel: 'Checklist Inicial',
    badgeClass: 'badge-checklist',
    title: 'Como verificar e atualizar o aplicativo',
    subtitle: 'Passos fundamentais para conferir a versão e instalar atualizações na loja',
    previewType: 'checklist-card',
    problemNotice: 'Grande parte das instabilidades temporárias são resolvidas ao garantir que o app está na versão mais recente.',
    causes: [
      'Aplicativo utilizando uma versão antiga ou cache desatualizado.',
      'Novas correções de sistema ainda não aplicadas no seu smartphone.'
    ],
    suggestions: [
      '**Verifique na loja:** Acesse a [Play Store](https://play.google.com/store/apps/details?id=br.com.dynamicssales.dynamicssales&pcampaignid=web_share) ou [App Store](https://apps.apple.com/br/app/hotsales/id1413947343) e confira se há uma versão mais recente.',
      '**Atualize:** Se aparecer a opção "Atualizar", toque nela para instalar a versão mais recente.'
    ],
    showStoreBanner: false,
    tags: ['como verificar e atualizar o aplicativo', 'confira a versão', 'verifique na loja', 'atualize', 'versão', 'atualização', 'configurações', 'loja', 'google play', 'app store', 'início', 'checklist']
  },
  {
    id: 'app-fechando-perdendo-dados',
    category: 'checklist',
    categoryLabel: 'Checklist Inicial',
    badgeClass: 'badge-checklist',
    title: 'Aplicativo fechando ou perdendo dados',
    subtitle: 'Instabilidade, encerramento em segundo plano ou perda de progresso no celular',
    previewType: 'none',
    problemNotice: 'Recomendações de desempenho do aparelho para evitar que o celular encerre o aplicativo.',
    causes: [
      'Pouca memória: ao abrir vários aplicativos, o celular pode fechar os que estão em segundo plano.',
      'Aplicativo parado por muito tempo: ao voltar para ele, pode ser necessário carregar a tela novamente.',
      'Internet instável: pode fazer o aplicativo perder a conexão.',
      'Aplicativo desatualizado: versões antigas podem apresentar falhas.'
    ],
    suggestions: [
      'Evite manter muitos aplicativos abertos ao mesmo tempo.',
      'Manter o celular com espaço livre de memória e o aplicativo sempre atualizado na loja ([Play Store](https://play.google.com/store/apps/details?id=br.com.dynamicssales.dynamicssales&pcampaignid=web_share) ou [Apple App Store](https://apps.apple.com/br/app/hotsales/id1413947343)).',
      'Evite deixar o HotSales aberto em segundo plano por muito tempo.',
      'Sempre que possível, salve o pedido antes de sair ou trocar de tela.'
    ],
    showStoreBanner: false,
    tags: ['aplicativo fechando ou perdendo dados', 'aplicativo fechando', 'perdendo dados', 'fechando', 'perder dados', 'pouca memória', 'economia de bateria', 'segundo plano', 'internet instável', 'desatualizado', 'fechando sozinho', 'memória', 'salvar o trabalho']
  },
  {
    id: 'client-not-in-database',
    category: 'conexao',
    categoryLabel: 'Conexão & Dados',
    badgeClass: 'badge-conexao',
    title: 'Cliente não aparece na base',
    // subtitle: 'Procedimento quando um cliente cadastrado ou alterado não é localizado no app',
    previewType: 'none',
    problemNotice: 'Instruções sobre sincronização entre a nuvem, SAP e o HotSales.',
    causes: [
      'Cliente com status "aguardando envio ERP", ainda não colocado na nova base.',
      'Alteração recente realizada primeiramente no sistema de gestão SAP.',
      'Cadastro ou alteração feita no momento de execução da carga de dados do HotSales.'
    ],
    suggestions: [
      '**Cliente "aguardando envio ERP":** Após enviar o cliente para a nova base, basta atualizar o sistema para que ele apareça.',
      '**Alterações feitas no SAP:** Podem levar até 2 horas para refletir no HotSales.',
      '**Cargas em Execução:** Se a alteração ocorrer durante uma carga ativa, ela poderá ser processada somente na próxima. Nesse caso, aguarde a próxima atualização.',
      '**Digitação incorreta:** Verifique se o código, nome ou CPF/CNPJ estão sendo digitados corretamente.[Veja Como pesquisar um cliente](https://www.youtube-nocookie.com/embed/b6-J0XeJILw?autoplay=1&rel=0)'
    ],
    showStoreBanner: false,
    tags: ['cliente não aparece na base', 'cliente não aparece', 'aguardando envio erp', 'sap', 'carga', 'nuvem', 'atualizar sistema', 'esperar 2 horas', 'integração']
  },
  {
    id: 'consumo-pedido-nao-aparece',
    category: 'conexao',
    categoryLabel: 'Conexão & Dados',
    badgeClass: 'badge-conexao',
    title: 'Não aparece consumo de compra',
    subtitle: 'Divergência ou ausência no histórico de compras do cliente',
    previewType: 'none',
    problemNotice: 'Orientações sobre o limite de tempo do histórico de compras e status de clientes novos.',
    causes: [
      'O período da última compra pode ter ultrapassado o tempo limite do sistema.',
      // 'O histórico de compra fica disponível no aplicativo por um ano.',
      // 'O histórico de compra fica disponível na web por dois anos.',
      'Cliente aguardando envio ERP.'
    ],
    suggestions: [
      '**Caso a última compra esteja dentro de dois anos da data atual:** Se estiver consultando o consumo pelo aplicativo, acesse o sistema pela web, lembrando que no aplicativo o consumo é limitado em 1 ano, na web 2 anos. [Site HotSales](https://webunifort.hotsales.com.br/#/login)',
      '**Cliente novo com status (aguardando envio ERP):** Não mostrará consumo, porque ainda não houve venda registrada.'
    ],
    showStoreBanner: false,
    tags: ['consumo - histórico de compra', 'consumo histórico de compra', 'consumo', 'histórico de compra', 'não aparecendo consumo', 'pedido', 'última compra', 'um ano', 'dois anos', 'aguardando envio erp', 'cliente novo', 'venda', 'web']
  },
  {
    id: 'slow-data-update',
    category: 'conexao',
    categoryLabel: 'Conexão & Dados',
    badgeClass: 'badge-conexao',
    title: 'Tela parada em Validando produtos e preços.',
    subtitle: 'Validação de produtos e preços travada ou demorada na tela',
    previewType: 'loading-preview',
    previewText: 'Validando produtos e atualizando preços..',
    problemNotice: 'Esse problema está geralmente relacionado à oscilação da conexão local de internet.',
    causes: [
      'Instabilidade no sinal do Wi-Fi ou oscilação da rede móvel (4G/5G).',
      'Lentidão temporária no envio e recebimento de pacotes de dados.'
    ],
    suggestions: [
      'Verifique a qualidade da sua **conexão local de internet**.',
      'Caso seja possível, **teste conectar em outra rede** (ex: trocar do Wi-Fi para o 4G/5G).',
      'Aguarde alguns segundos e torne a tentar o carregamento.',
      'Caso esteja com urgência, utilize a versão web: [Site HotSales](https://webunifort.hotsales.com.br/#/login)'
    ],
    showStoreBanner: false,
    tags: ['demora na atualização de dados', 'demora', 'carregando', 'validando produtos', 'atualizando preços', 'lento', 'conexão local', 'internet', 'wi-fi', 'validando', 'urgência', 'versão web', 'web']
  },
  {
    id: 'pdf-opening-same-file',
    category: 'checklist',
    categoryLabel: 'Checklist Inicial',
    badgeClass: 'badge-checklist',
    title: 'Arquivo PDF abre sempre com o mesmo nome',
    // subtitle: 'Procedimento quando o e-mail recebe um PDF novo mas ao abrir exibe o arquivo anterior',
    previewType: 'none',
    problemNotice: 'Recomendações para resolver arquivos PDF abrindo cópias em cache.',
    causes: [
      'Visualizador abrindo a cópia em cache temporário do navegador ou do aplicativo de e-mail.',
      'Arquivos com o mesmo nome sobrescrevendo a exibição no dispositivo.'
    ],
    suggestions: [
      '**Baixe o PDF para o dispositivo:** Evite apenas visualizar o arquivo pelo e-mail. Faça o download antes de abri-lo.',
      '**Renomeie o arquivo**: Se já existir um PDF com o mesmo nome, salve o novo arquivo com outro nome, por exemplo: documento_v2.pdf.',
      '**Se continuar abrindo o arquivo antigo:** Exclua ou renomeie o arquivo anterior e tente baixar o PDF novamente.'
    ],
    showStoreBanner: false,
    tags: ['e-mail abre sempre o mesmo arquivo pdf antigo', 'pdf', 'abrindo o mesmo', 'arquivo anterior', 'pdf antigo', 'baixar pdf', 'cache do navegador', 'mesmo arquivo', 'anexo']
  },
  {
    id: 'client-already-registered',
    category: 'checklist',
    categoryLabel: 'Checklist Inicial',
    badgeClass: 'badge-checklist',
    title: 'Erro - Cliente já está cadastrado',
    subtitle: 'Alerta "Cliente [Nome] já está cadastrado sob o CNPJ..." ao tentar cadastrar',
    previewType: 'dark-alert-preview',
    alertTitle: 'Erro',
    alertMessage: 'Cliente XXXXXXX XXXXX XXXX já está cadastrado sob o CNPJ 99999999999 e IE 888888888. Caso não esteja identificando o cliente, entre em contato com o administrador para que o mesmo vincule o cliente ao seu usuário.',
    problemNotice: 'Pesquisa sendo realizada no local errado (provavelmente clicando em "Novo Cliente" e digitando o CNPJ de um cliente já existente).',
    causes: [
      'Tentativa de cadastrar um novo registro para um cliente que já existe no banco de dados do sistema.',
      'O cliente já está cadastrado no sistema, e está usando o campo novo cliente para pesquisar.',
      'Cliente já existe e pode estar em outra base de RCA.'
    ],
    suggestions: [
      '**Não clique em Novo Cliente para pesquisar.**',
      'Acesse a tela de Clientes, vá até a **barra de pesquisa** e digite o **Nome**, **CNPJ/CPF** ou **Código do cliente**. [Veja Como pesquisar um cliente](https://www.youtube-nocookie.com/embed/b6-J0XeJILw?autoplay=1&rel=0) ',
      'Você também pode utilizar a opção de **Busca Avançada** para localizar a empresa.',
      'Tentando cadastrar um cliente que pode estar na base de outro RCA, **solicite ao setor de atendimento para verificar**.'
    ],
    showStoreBanner: false,
    tags: ['erro - cliente já está cadastrado', 'cliente já está cadastrado', 'novo cliente', 'cnpj', 'cpf', 'código', 'busca avançada', 'rca', 'outra base', 'vincular', 'administrador', 'cadastrado', 'pesquisar','pesquisa','buscar','consultar']
  },
  {
    id: 'permission-error',
    category: 'login',
    categoryLabel: 'Login & Permissão',
    badgeClass: 'badge-login',
    title: 'Erro "Você não tem permissão"',
    subtitle: 'Acesso bloqueado ao tentar realizar uma função no sistema',
    previewType: 'dark-alert-preview',
    alertTitle: 'Erro',
    alertMessage: 'Você não tem permissão para essa atividade.',
    problemNotice: 'Pode ser provocado por letras maiúsculas no e-mail ou endereço da web errado.',
    causes: [
      'E-mail digitado com letras maiúsculas no momento do login.',
      'Endereço da web incorreto.'
    ],
    suggestions: [
      'Certifique-se de que o e-mail foi digitado totalmente em **letras minúsculas**.',
      'Verifique o endereço do site: [Site HotSales](https://webunifort.hotsales.com.br/#/login)',
      'Se o erro persistir, Entre em contato com o atendimento/comercial, para verificação do cadastro.'
    ],
    showStoreBanner: false,
    tags: ['erro "você não tem permissão"', 'erro de permissão', 'permissão', 'atividade', 'não tem permissão', 'bloqueado', 'maiúsculas', 'webunifort', 'cadastro', 'sem permissão']
  },
  {
    id: 'db-download-error',
    category: 'conexao',
    categoryLabel: 'Conexão & Dados',
    badgeClass: 'badge-conexao',
    title: 'Erro ao fazer o download do banco de dados',
    // subtitle: 'Mensagem "Erro ao fazer o download do banco de dados... ENOSPC (No space left on device)"',
    previewType: 'dark-alert-preview',
    alertTitle: 'Erro',
    alertMessage: 'Erro ao fazer o download do banco de dados. {"code":3, "source":"https://storage.googleapis.com/...", "exception":"write failed: ENOSPC (No space left on device)"}',
    problemNotice: 'Verificar a internet e conexão no local de atuação. Pode ser provocado por oscilação de rede.',
    causes: [
      'Instabilidade ou oscilação de internet no local de atuação durante o download do banco de dados.',
      'Acúmulo de cache e dados temporários nas configurações do celular.'
    ],
    suggestions: [
      '**Fechar o aplicativo e abrir novamente.**',
      '**Verificar versão do aplicativo** na loja de apps (Play Store ou App Store) e atualizar se necessário.',
      '**Limpeza de cache e dados**, nas configurações do aparelho (liberando espaço na memória interna) ([Como fazer a limpeza de cache](#cache-cleanup-guide)).'
    ],
    showStoreBanner: true,
    tags: ['erro ao fazer o download do banco de dados', 'download do banco de dados', 'banco de dados', 'enospc', 'no space left on device', 'memória', 'espaço', 'limpeza de cache', 'erro ao fazer o download', 'banco']
  },
  {
    id: 'login-system-error',
    category: 'login',
    categoryLabel: 'Login & Permissão',
    badgeClass: 'badge-login',
    title: 'Usuário ou senha inválidos',
    subtitle: 'Alerta "Usuário ou senha inválidos" ao tentar entrar',
    previewType: 'login-alert-preview',
    alertMessage: 'Usuário ou senha inválidos',
    problemNotice: 'Falha na verificação da senha/e-mail ou link web incorreto.',
    causes: [
      'E-mail ou senha digitados incorretamente (atenção a letras maiúsculas/minúsculas).',
      'Endereço da web digitado incorretamente no navegador.'
    ],
    suggestions: [
      'Confirme se o **e-mail e a senha** foram digitados corretamente.',
      'Caso tenha esquecido a senha, clique em **"Esqueci minha senha"** no login para receber o e-mail de recuperação no seu e-mail.',
      'Endereço correto do site : [Site HotSales](https://webunifort.hotsales.com.br/#/login)',
      'Se a mensagem persistir, entre em contato com o atendimento/comercial, para verificar seu cadastro.'      
    ],
    showStoreBanner: false,
    tags: ['erro ao logar no sistema', 'erro ao logar', 'usuário ou senha inválidos', 'login', 'senha', 'esqueci minha senha', 'esqueci a senha', 'autenticação', 'inválidos']
  },
  {
    id: 'sync-login-error',
    category: 'conexao',
    categoryLabel: 'Conexão & Dados',
    badgeClass: 'badge-conexao',
    title: 'Erro ao sincronizar',
    // subtitle: 'Mensagem "Erro ao sincronizar, tente fazer o login novamente..."',
    previewType: 'dark-alert-preview',
    alertTitle: 'Erro',
    alertMessage: 'Erro ao sincronizar, tente fazer o login novamente, e se persistir o erro entre em contato com dev_ops@hotsales.com.br.',
    problemNotice: 'Conexão no local de atuação.',
    causes: [
      'Oscilação ou instabilidade na conexão de internet no local de atuação.',
      'Sessão de login expirada durante a tentativa de sincronizar.',
      'Acúmulo de arquivos temporários de cache no dispositivo.'
    ],
    suggestions: [
      '**Fechar o aplicativo e abrir novamente.**',
      '**Verificar versão do aplicativo**, se necessário atualizar na loja de apps [Play Store](https://play.google.com/store/apps/details?id=br.com.dynamicssales.dynamicssales&pcampaignid=web_share) ou [App Store](https://apps.apple.com/br/app/hotsales/id1413947343).',
      '**Limpeza de cache e dados**, nas configurações do aparelho ([Como fazer a limpeza de cache](#cache-cleanup-guide)).'
    ],
    showStoreBanner: true,
    tags: ['erro ao sincronizar', 'sincronizar', 'login novamente', 'sincronização', 'limpeza de cache', 'conexão', 'tentar login']
  },
  {
    id: 'force-resync',
    category: 'conexao',
    categoryLabel: 'Conexão & Dados',
    badgeClass: 'badge-conexao',
    title: 'Fazer uma re-sincronização',
    // subtitle: 'Procedimento para forçar a atualização completa dos dados do aplicativo',
    previewType: 'none',
    problemNotice: 'Recomendado quando os dados do aplicativo precisam ser atualizados manualmente com o servidor.',
    causes: [
      'Divergência entre as informações exibidas no app e no sistema web.'
    ],
    suggestions: [
      'No aplicativo, acesse: **Configurações** > **Sincronização** > **Forçar re-sincronização**.',
      'Aguarde a conclusão da re-sincronização (este procedimento pode demorar um pouco).',
      'Em caso de urgência, acesse diretamente pelo site. [Site HotSales](https://webunifort.hotsales.com.br/#/login)'
    ],
    showStoreBanner: false,
    tags: ['fazer uma re-sincronização', 're-sincronização', 'resincronizacao', 'sincronização', 'forçar', 'configurações', 'sincronizar', 'dados', 'urgência', 'web']
  },
  {
    id: 'transportadora-missing',
    category: 'checklist',
    categoryLabel: 'Checklist Inicial',
    badgeClass: 'badge-checklist',
    title: 'Erro - Transportador não encontrado',
    subtitle: 'Alerta "Transportador não encontrado" na montagem do pedido',
    previewType: 'dark-alert-preview',
    alertTitle: 'Erro',
    alertMessage: 'Transportador não encontrado',
    problemNotice: 'Geralmente provocado por centro de faturamento divergente ou não tem cadastrado o frete para a região.',
    causes: [
      'Centro de faturamento selecionado de forma incorreta no pedido.',
      'Ausência de condição de frete cadastrada no sistema para a região do cliente.'
    ],
    suggestions: [
      '**Verificar a escolha do centro de faturamento**, no momento da inclusão do pedido.',
      '**Informe o cliente** para o atendimento verificar com o setor de transportes, se existe condição de frete para a região do cliente.'
    ],
    showStoreBanner: false,
    tags: ['frete - não aparece transportadora', 'frete', 'transportadora', 'não aparece transportadora', 'transportador não encontrado', 'transportador nao encontrado', 'centro de faturamento', 'fornecedor', 'região', 'cliente', 'transporte', 'erro transportador']
  },
  {
    id: 'cache-cleanup-guide',
    category: 'checklist',
    categoryLabel: 'Checklist Inicial',
    badgeClass: 'badge-checklist',
    title: 'Limpeza de cache e dados do app',
    subtitle: 'Como limpar os dados temporários do aplicativo HotSales no Android',
    previewType: 'none',
    problemNotice: 'Procedimento recomendado para corrigir falhas de download do banco de dados ou travamentos frequentes.',
    causes: [
      'Dados temporários corrompidos armazenados no smartphone.',
      'Falta de memória ou espaço interno no celular.'
    ],
    suggestions: [
      'No seu celular Android, acesse as **Configurações** gerais.',
      'Vá na opção **Aplicativos** (ou *Gerenciador de Aplicações*).',
      'Procure e selecione o aplicativo **HotSales**.',
      'Clique em **Armazenamento** > toque na opção **Limpar Cache** e confirme.',
      '*(Opcional)* Se o erro persistir, toque em **Limpar Dados** (atenção: será necessário fazer o login no aplicativo novamente).'
    ],
    youtubeVideoUrl: 'https://youtu.be/HvAo73OVPlY',
    youtubeVideoEmbed: 'https://www.youtube-nocookie.com/embed/HvAo73OVPlY?autoplay=1&rel=0',
    showStoreBanner: true,
    tags: ['limpeza de cache e dados do app', 'limpeza de cache', 'limpar cache', 'limpar dados', 'armazenamento', 'configurações do celular', 'android', 'corrompido', 'travando', 'youtube', 'vídeo']
  },
  {
    id: 'nao-aparece-produtos',
    category: 'conexao',
    categoryLabel: 'Conexão & Dados',
    badgeClass: 'badge-conexao',
    title: 'Produto não aparece',
    subtitle: 'Classificação',
    previewType: 'none',
    problemNotice: 'Geralmente causado por produto com troca de classificação.',
    causes: [
      'Aplicativo desatualizado.',
      'Classificação do produto alterada',
      'Filtro ativo'
    ],
    suggestions: [
      'Verifique se existe algum **filtro ou busca** ativo na parte superior e limpe a pesquisa.',
      'Solicite ao atendente, que verifique com o setor de Compras, sobre a classificação do produto.',
      'Verifique a versão do aplicativo: [Play Store](https://play.google.com/store/apps/details?id=br.com.dynamicssales.dynamicssales&pcampaignid=web_share) ou [App Store](https://apps.apple.com/br/app/hotsales/id1413947343).'
    ],
    showStoreBanner: false,
    tags: ['não aparece os produtos na montagem do pedido', 'não aparece os produtos', 'produtos', 'sem produtos', 'lista em branco', 'pedido', 'filtro', 'marca', 'tabela de preços']
  },
  {
    id: 'nao-consigo-acessar-site-empresa',
    category: 'login',
    categoryLabel: 'Login & Permissão',
    badgeClass: 'badge-login',
    title: 'Não consigo acessar o site da empresa',
    subtitle: 'Dificuldade de acesso à plataforma web webunifort.hotsales.com.br',
    previewType: 'none',
    problemNotice: 'Orientações para validar a URL oficial de login e conexões de rede.',
    causes: [
      'Endereço web digitado incorreto.',
      'Cache do navegador.',
      'Sinal de internet.'
    ],
    suggestions: [
      'Certifique-se de usar a URL oficial, correta: [Site HotSales](https://webunifort.hotsales.com.br/#/login)',
      'Teste abrir o link usando a rede 4G/5G do seu celular.',
      'Limpe o cache do seu navegador de internet.'
    ],
    showStoreBanner: false,
    tags: ['não consigo acessar o site da empresa', 'não consigo acessar o site', 'site da empresa', 'webunifort', 'site', 'login web', 'link', 'acessar site', 'navegador', 'url']
  },
  {
    id: 'voce-foi-desconectado',
    category: 'login',
    categoryLabel: 'Login & Permissão',
    badgeClass: 'badge-login',
    title: 'Você foi desconectado',
    subtitle: 'Mensagem "Você foi desconectado. É necessário logar novamente..."',
    previewType: 'dark-alert-preview',
    alertTitle: 'Erro',
    alertMessage: 'Você foi desconectado. É necessário logar novamente. Para evitar que ocorra novamente, faça login diariamente',
    problemNotice: 'Procedimento a ser realizado: basta fechar a tela de erro e acessar novamente o sistema.',
    causes: [
      'Sessão expirada por inatividade ou período de conexão excedido.',
      'Falta de login diário para renovar a autenticação no aplicativo.'
    ],
    suggestions: [
      'Toque no botão **Fechar** na tela de erro.',
      '**Acesse novamente o sistema:** digite seu usuário e senha para realizar um novo login.',
      '**Dica importante:** para evitar que o erro ocorra novamente, faça login diariamente no aplicativo.'
    ],
    showStoreBanner: false,
    tags: ['você foi desconectado', 'voce foi desconectado', 'desconectado', 'é necessário logar novamente', 'logar novamente', 'login diariamente', 'fazer login diariamente', 'sessão expirada', 'login', 'autenticação', 'fechar', 'erro']
  },
  {
    id: 'como-baixar-nota-fiscal-e-boletos',
    category: 'dica',
    categoryLabel: '💡 Dica',
    badgeClass: 'badge-dica',
    title: 'Como baixar Nota Fiscal e Boletos',
    subtitle: 'Os arquivos de NFe e Boleto ficam disponíveis para download somente a partir do dia seguinte à emissão.',
    previewType: 'nfe-boleto-preview',
    problemNotice: 'Dica de utilização do sistema das funcionalidades de emissão de DANFE e boleto.',
    causes: [],
    suggestions: [
      '**📄 Para baixar a Nota Fiscal:** Acesse **Pesquisar Pedido**> No filtro defina > Notas Emitidas > Localize o pedido desejado, e clique no ícone de emitir DANFE.',
      '**🧾 Para baixar o Boleto :** Acesse a opção na barra lateral > ***Títulos dos Clientes*** > Utilize os filtros para localizar os títulos desejados. **Use o filtro para consultar e baixar boletos vencidos ou a vencer**',
      '**Importante:** Oriente o cliente a realizar o cadastro no site da empresa para ter acesso aos documentos disponíveis.'  
    ],          
    showStoreBanner: false,
    tags: ['como baixar nota fiscal e boletos', 'dica', 'nota fiscal', 'boletos', 'boleto', 'nfe', 'danfe', 'xml', 'baixar nota fiscal', 'baixar boleto', 'pesquisar pedido', 'notas emitidas', 'títulos dos clientes', 'titulos dos clientes', 'vencidos', 'a vencer', 'download', 'financeiro']
  },
   {
     id: 'Orçamento',
     category: 'dica',
     categoryLabel: '💡 Dica',
     badgeClass: 'badge-dica',
     title: 'Orçamento não localizado na base',
    //  subtitle: 'Orçamento não localizado',
     previewType: 'none',
     problemNotice: 'Problema na busca de um orçamento.',
     causes: [
       'Periodo limite expirado, 30 dias.',
        'Erro na digitação dos dados do cliente, no campo de pesquisa.'
     ],
     suggestions: [
       '**Importante**: O orçamento permanece disponível na base por 30 dias. Após esse período, ele é excluído automaticamente pelo sistema.*** Caso ainda seja necessário, será preciso criar um novo***.',
       '**Atenção**, verifique se não clicou em ***Gerar Pedido***.',
       'Verifique se os dados do cliente, foram digitados corretamente na pesquisa.'
     ],
     showStoreBanner: false,
     tags: ['Orçamento', 'orçametno', 'Periodo Orçamento', 'periodo orçamento', 'orcamento', 'eliminado', '30 dias']
   },
  {
    id: 'erro-na-operacao-administrador',
    category: 'conexao',
    categoryLabel: 'Conexão & Dados',
    badgeClass: 'badge-conexao',
    title: 'Ocorreu um erro na operação',
    subtitle: 'Mensagem "Ocorreu um erro na operação. Entre em contato com o Administrador."',
    previewType: 'dark-alert-preview',
    alertTitle: 'Erro',
    alertMessage: 'Ocorreu um erro na operação. Entre em contato com o Administrador.',
    problemNotice: 'Instabilidade de conexão, cache acumulado ou necessidade de sincronização durante a operação.',
    causes: [
      'Oscilação momentânea ou queda na conexão com a internet (Wi-Fi ou dados móveis).',
      'Acúmulo de arquivos temporários e cache no aplicativo.',
      'Versão do aplicativo desatualizada no dispositivo.'
    ],
    suggestions: [
      '**Verificar a conexão com a internet:** certifique-se de que a rede Wi-Fi ou dados móveis (4G/5G) esteja ativa e estável.',
      '**Fechar o aplicativo e abrir novamente.**',
      '**Necessidade de atualizar:** acesse a loja e verifique se há atualizações disponíveis para o aplicativo ([Play Store](https://play.google.com/store/apps/details?id=br.com.dynamicssales.dynamicssales&pcampaignid=web_share) ou [App Store](https://apps.apple.com/br/app/hotsales/id1413947343)).',
      '**Limpar cache e dados:** realize o procedimento de limpeza nas configurações do aparelho ([Como fazer a limpeza de cache](#cache-cleanup-guide)).',
      '**Em caso de urgência, acesse pela web:** [Site HotSales](https://webunifort.hotsales.com.br/#/login).'
    ],
    showStoreBanner: true,
    tags: ['ocorreu um erro na operação', 'ocorreu um erro', 'erro na operacao', 'entre em contato com o administrador', 'administrador', 'conexão', 'internet', 'atualizar', 'play store', 'app store', 'limpar cache', 'urgência', 'web', 'erro']
  },
  {
    id: 'status-hotsales-aguardando-envio-erp',
    category: 'conexao',
    categoryLabel: 'Conexão & Dados',
    badgeClass: 'badge-conexao',
    title: 'Status HotSales: Erro ERP',
    // subtitle: 'Situação do pedido com status "Erro ERP" ou "Aguardando envio ERP"',
    previewType: 'order-status-preview',
    problemNotice: 'Pedido retido para análise .',
    causes: [
      'Cliente pode está com alguma situação irregular que precisa ser analisada pelo setor responsável.'
    ],
    suggestions: [
      '**Aguardar a analise** realizada pelo setor responsavel.',
      '**Entrar em contato com o atendimento** para saber mais sobre a situação do pedido.'
    ],
    showStoreBanner: false,
    tags: ['status hotsales, aguardando envio erp', 'status hotsales', 'aguardando envio erp', 'erro erp', 'status hotsales: erro erp', 'status hotsales erro erp', 'pedido', 'situação irregular', 'setor responsavel', 'atendimento', 'irregular']
  },
  {
    id: 'video-uso-do-hotsales',
    category: 'video',
    categoryLabel: 'Vídeo',
    badgeClass: 'badge-video',
    title: 'Uso do HotSales',
    subtitle: 'Uso Hotsales',
    previewType: 'video-preview',
    problemNotice: 'Vídeo demonstrativo com instruções sobre o uso e funcionalidades do aplicativo HotSales.',
    causes: [],
    // suggestions: [
    //   'Assista ao vídeo explicativo sobre o uso do aplicativo HotSales:'/* [Uso Hotsales](https://www.youtube.com/watch?v=Ki_7Dl3bs1k&t=707s)'HotSales: [Uso Hotsales](https://www.youtube.com/watch?v=Ki_7Dl3bs1k&t=707s)'*/
    // ],
    youtubeVideoUrl: 'https://www.youtube.com/watch?v=Ki_7Dl3bs1k',
    youtubeVideoEmbed: 'https://www.youtube-nocookie.com/embed/Ki_7Dl3bs1k?&autoplay=1&rel=0',
    showStoreBanner: false,
    tags: ['uso do hotsales', 'uso hotsales', 'video', 'vídeo', 'youtube', 'como usar', 'tutorial', 'treinamento', 'aplicativo', 'hotsales']
  },
  {
    id: 'video-Recomendados-hotsales',
    category: 'video',
    categoryLabel: 'Vídeo',
    badgeClass: 'badge-video',
    title: 'Produtos Recomendados',
    subtitle: 'Hotsales',
    previewType: 'video-preview',
    problemNotice: 'Vídeo demonstrativo com instruções sobre o botão de produtos recomentados.',
    causes: [],
    // suggestions: [
    //   'Assista ao vídeo explicativo sobre o uso do aplicativo HotSales:'/* [Uso Hotsales](https://www.youtube.com/watch?v=Ki_7Dl3bs1k&t=707s)'HotSales: [Uso Hotsales](https://www.youtube.com/watch?v=Ki_7Dl3bs1k&t=707s)'*/
    // ],
    youtubeVideoUrl: 'https://youtu.be/ECnrYHxHtkA',
    youtubeVideoEmbed: 'https://www.youtube-nocookie.com/embed/ECnrYHxHtkA?autoplay=1&rel=0',
    showStoreBanner: false,
    tags: ['uso do hotsales', 'uso hotsales', 'video', 'vídeo', 'youtube', 'como usar', 'tutorial', 'treinamento', 'aplicativo', 'hotsales','recomendados']
  }
  ,
  {
    id: 'video-Consumo-hotsales',
    category: 'video',
    categoryLabel: 'Vídeo',
    badgeClass: 'badge-video',
    title: 'Consumo do produto',
    subtitle: 'Hotsales',
    previewType: 'video-preview',
    problemNotice: 'Vídeo demonstrativo com instruções sobre o botão de Consumo.',
    causes: [],
    // suggestions: [
    //   'Assista ao vídeo explicativo sobre o uso do aplicativo HotSales:'/* [Uso Hotsales](https://www.youtube.com/watch?v=Ki_7Dl3bs1k&t=707s)'HotSales: [Uso Hotsales](https://www.youtube.com/watch?v=Ki_7Dl3bs1k&t=707s)'*/
    // ],
    youtubeVideoUrl: 'https://youtu.be/FebtZcjDpQk',
    youtubeVideoEmbed: 'https://www.youtube-nocookie.com/embed/FebtZcjDpQk?autoplay=1&rel=0',
    showStoreBanner: false,
    tags: ['uso do hotsales', 'uso hotsales', 'video', 'vídeo', 'youtube', 'como usar', 'tutorial', 'treinamento', 'aplicativo', 'hotsales','consumo']
  }
  ,
  {
    id: 'video-substituto-hotsales',
    category: 'video',
    categoryLabel: 'Vídeo',
    badgeClass: 'badge-video',
    title: 'Produtos Substituto',
    subtitle: 'Hotsales',
    previewType: 'video-preview',
    problemNotice: 'Vídeo demonstrativo com instruções sobre o botão de produtos substituto.',
    causes: [],
    // suggestions: [
    //   'Assista ao vídeo explicativo sobre o uso do aplicativo HotSales:'/* [Uso Hotsales](https://www.youtube.com/watch?v=Ki_7Dl3bs1k&t=707s)'HotSales: [Uso Hotsales](https://www.youtube.com/watch?v=Ki_7Dl3bs1k&t=707s)'*/
    // ],
    youtubeVideoUrl: 'https://youtu.be/sCa-4PLSYXc',
    youtubeVideoEmbed: 'https://www.youtube-nocookie.com/embed/sCa-4PLSYXc?autoplay=1&rel=0',
    showStoreBanner: false,
    tags: ['uso do hotsales', 'uso hotsales', 'video', 'vídeo', 'youtube', 'como usar', 'tutorial', 'treinamento', 'aplicativo', 'hotsales','substituto']
  }
    ,
  {
    id: 'video-relacionados-hotsales',
    category: 'video',
    categoryLabel: 'Vídeo',
    badgeClass: 'badge-video',
    title: 'Produtos Relacionados',
    subtitle: 'Hotsales',
    previewType: 'video-preview',
    problemNotice: 'Vídeo demonstrativo com instruções sobre o botão de produtos relacionados.',
    causes: [],
    // suggestions: [
    //   'Assista ao vídeo explicativo sobre o uso do aplicativo HotSales:'/* [Uso Hotsales](https://www.youtube.com/watch?v=Ki_7Dl3bs1k&t=707s)'HotSales: [Uso Hotsales](https://www.youtube.com/watch?v=Ki_7Dl3bs1k&t=707s)'*/
    // ],
    youtubeVideoUrl: 'https://youtu.be/B-zmvMXfNps',
    youtubeVideoEmbed: 'https://www.youtube-nocookie.com/embed/B-zmvMXfNps?autoplay=1&rel=0',
    showStoreBanner: false,
    tags: ['uso do hotsales', 'uso hotsales', 'video', 'vídeo', 'youtube', 'como usar', 'tutorial', 'treinamento', 'aplicativo', 'hotsales','relacionados']
  },
  {
    id: 'conexao-modo-aviao-sinal-fraco',
    category: 'conexao',
    categoryLabel: 'Conexão & Dados',
    badgeClass: 'badge-conexao',
    title: 'Aplicativo não está funcionando (Modo Avião ou Internet Fraca)',
    subtitle: 'Verifique se o aparelho está no modo avião ou com dados móveis / Wi-Fi instáveis',
    previewType: 'airplane-signal-preview',
    problemNotice: 'Quando o aparelho está no Modo Avião ou com sinal de internet fraco/instável, o aplicativo perde a comunicação com o servidor e as funcionalidades deixam de responder.',
    causes: [
      'Aparelho configurado no Modo Avião (ícone de avião ✈️ ativo na barra superior do celular).',
      'Dados móveis (3G/4G/H+) com sinal fraco ou sem pacote de dados disponível.',
      'Wi-Fi conectado sem acesso à internet ou com oscilação na rede.'
    ],
    suggestions: [
      '**Desative o Modo Avião:** Acesse a barra de notificações do celular ou as configurações e desligue o Modo Avião (✈️) para restabelecer a rede.',
      '**Verifique a internet:** Certifique-se de que os Dados Móveis (4G/5G) ou Wi-Fi estão ativos com sinal estável.',
      '**Aguarde a reconexão:** Após sair do Modo Avião, aguarde alguns segundos até que o sinal de rede se estabilize e acesse novamente o sistema.',
      '**Em caso de urgência:** Acesse diretamente pelo navegador web: [Site HotSales](https://webunifort.hotsales.com.br/#/login)'
    ],
    showStoreBanner: false,
    tags: ['aplicativo nao esta funcionando', 'modo avião', 'modo aviao', 'dados moveis com internet fraca', 'internet fraca', 'sem internet', 'sinal fraco', 'conexão', 'dados móveis', 'wi-fi', '3g', '4g', 'h+', 'avião', 'desconectar', 'não funciona', 'offline']
  },
  {
    id: 'link-errado-empresa-filial',
    category: 'login',
    categoryLabel: 'Login & Permissão',
    badgeClass: 'badge-login',
    title: 'Nenhuma Empresa vinculada ao seu usuário',
    subtitle: 'Aviso ao tentar acessar o sistema por um link ou endereço incorreto',
    previewType: 'info-alert-preview',
    alertTitle: 'Informações',
    alertMessage: 'Nenhuma Empresa vinculada ao seu usuário.',
    problemNotice: 'O link que está tentando acessar não é o mesmo utilizado para a sua base ou empresa.',
    causes: [
      'Tentativa de acesso por um link genérico, desatualizado ou de outro ambiente/empresa.',
      'O endereço web digitado no navegador não corresponde à base oficial do HotSales.'
    ],
    suggestions: [
      '**Acesse pelo link correto:** O link correto para acesso ao sistema é: [Site HotSales UniFort](https://webunifort.hotsales.com.br/#/login)',
      '**Salve nos favoritos:** Certifique-se de salvar o link correto nos favoritos do seu navegador para evitar acessar links antigos.',
    ],
    showStoreBanner: false,
    tags: ['link errado', 'link que esta tentando acessar nao e o mesmo', 'nenhuma empresa/filial vinculada ao seu usuário', 'nenhuma empresa', 'nenhuma filial', 'empresa/filial', 'informações', 'link correto', 'acesso web', 'login', 'filial', 'hotsales web']
  }
];

// VARIÁVEIS DE CONTROLE DE FLUXO DA NAVEGAÇÃO E FILTROS
let openedFromMenu = false; // Indica se o modal de solução foi aberto a partir da lista do menu
let currentCategoryFilter = 'todos'; // Categoria ativa ('todos', 'dica', 'conexao', 'login', 'checklist')
let currentSortOrder = 'alpha'; // 'alpha' (A-Z) ou 'type' (organizado por tipo de cartão)

// 2. REFERÊNCIAS DOS ELEMENTOS DOM
const openMenuModalBtn = document.getElementById('openMenuModalBtn');
const systemHelpMenuModal = document.getElementById('systemHelpMenuModal');
const menuModalCloseBtn = document.getElementById('menuModalCloseBtn');
const menuOptionsList = document.getElementById('menuOptionsList');
const modalSearchInput = document.getElementById('modalSearchInput');
const modalClearSearchBtn = document.getElementById('modalClearSearchBtn');
const sortOrderSelect = document.getElementById('sortOrderSelect');
const modalCategoryFilters = document.getElementById('modalCategoryFilters');

const solutionModal = document.getElementById('solutionModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalNoticeText = document.getElementById('modalNoticeText');
const modalCausesList = document.getElementById('modalCausesList');
const modalStepsList = document.getElementById('modalStepsList');
const modalVisualPreview = document.getElementById('modalVisualPreview');
const cardsGrid = document.getElementById('cardsGrid');
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Função global para expandir/recolher as Possíveis Causas no Modal de Solução
window.toggleCausesSection = function(e) {
  if (e) {
    if (e._causesToggleHandled) return;
    e._causesToggleHandled = true;
    if (typeof e.stopPropagation === 'function') e.stopPropagation();
  }

  const causesSection = document.getElementById('causesSection');
  const causesToggleBtn = document.getElementById('causesToggleBtn');
  const causesContentBox = document.getElementById('causesContentBox');
  const causesStatusHint = document.getElementById('causesStatusHint');

  if (!causesContentBox) return;

  const isCurrentlyOpen = causesContentBox.classList.contains('is-open') || 
                          causesContentBox.style.display === 'block' ||
                          (causesToggleBtn && causesToggleBtn.getAttribute('aria-expanded') === 'true');

  if (isCurrentlyOpen) {
    causesContentBox.style.display = 'none';
    causesContentBox.classList.remove('is-open');
    if (causesToggleBtn) causesToggleBtn.setAttribute('aria-expanded', 'false');
    if (causesSection) causesSection.classList.remove('is-expanded');
    if (causesStatusHint) causesStatusHint.textContent = '(clique para ver)';
  } else {
    causesContentBox.style.display = 'block';
    causesContentBox.classList.add('is-open');
    if (causesToggleBtn) causesToggleBtn.setAttribute('aria-expanded', 'true');
    if (causesSection) causesSection.classList.add('is-expanded');
    if (causesStatusHint) causesStatusHint.textContent = '(clique para ocultar)';
  }
};

// Funções globais para o Modal de Vídeo Tutorial em Tela Cheia (YouTube)
window.openVideoModal = function(embedUrl, directUrl) {
  const videoModal = document.getElementById('videoFullscreenModal');
  const iframe = document.getElementById('fullscreenVideoIframe');
  const externalLink = document.getElementById('videoExternalYtLink');
  if (!videoModal || !iframe) return;

  const finalEmbed = embedUrl || 'https://www.youtube-nocookie.com/embed/HvAo73OVPlY?autoplay=1&rel=0';
  iframe.src = finalEmbed;
  if (externalLink) externalLink.href = directUrl || 'https://youtu.be/HvAo73OVPlY';
  videoModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Tenta ativar a API de tela cheia nativa no container do vídeo
  const dialog = videoModal.querySelector('.video-fullscreen-dialog');
  if (dialog && typeof dialog.requestFullscreen === 'function') {
    dialog.requestFullscreen().catch(() => {});
  }
};

window.closeVideoModal = function() {
  const videoModal = document.getElementById('videoFullscreenModal');
  const iframe = document.getElementById('fullscreenVideoIframe');
  if (!videoModal) return;

  if (document.fullscreenElement && typeof document.exitFullscreen === 'function') {
    document.exitFullscreen().catch(() => {});
  }

  if (iframe) iframe.src = ''; // Para imediatamente o áudio e a reprodução
  videoModal.style.display = 'none';

  if (solutionModal && solutionModal.style.display === 'flex') {
    document.body.style.overflow = 'hidden';
  } else if (systemHelpMenuModal && systemHelpMenuModal.style.display === 'flex') {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

// 3. INICIALIZAÇÃO E EVENTOS
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function initApp() {
  updateCategoryPillCounts();
  applyMenuFilterAndSort();
  renderCards();
  initEvents();
  initPwaInstall();
}

function initEvents() {
  // Abrir o Modal de Menu de Opções
  if (openMenuModalBtn) {
    openMenuModalBtn.addEventListener('click', openMenuModal);
  }

  // Fechar o Modal de Menu de Opções
  if (menuModalCloseBtn) {
    menuModalCloseBtn.addEventListener('click', () => closeMenuModal(true));
  }

  // Clicar fora do Modal de Menu fecha a janela
  if (systemHelpMenuModal) {
    systemHelpMenuModal.addEventListener('click', (e) => {
      if (e.target === systemHelpMenuModal) closeMenuModal(true);
    });
  }

  // Pesquisa Inteligente no Modal de Menu
  if (modalSearchInput) {
    modalSearchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      if (modalClearSearchBtn) {
        modalClearSearchBtn.style.display = val.length > 0 ? 'block' : 'none';
      }
      applyMenuFilterAndSort();
    });
  }

  if (modalClearSearchBtn) {
    modalClearSearchBtn.addEventListener('click', () => {
      if (modalSearchInput) modalSearchInput.value = '';
      modalClearSearchBtn.style.display = 'none';
      applyMenuFilterAndSort();
      modalSearchInput.focus();
    });
  }

  // Filtros por Tipo de Cartão no Modal (Pills)
  const catPills = document.querySelectorAll('.cat-pill-btn');
  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategoryFilter = pill.dataset.category || 'todos';
      applyMenuFilterAndSort();
    });
  });

  // Ordenação (Ordem Alfabética A-Z ou Organizar por Tipo)
  if (sortOrderSelect) {
    sortOrderSelect.addEventListener('change', (e) => {
      currentSortOrder = e.target.value;
      applyMenuFilterAndSort();
    });
  }

  // Fechar o Modal de Solução
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (solutionModal) {
    solutionModal.addEventListener('click', (e) => {
      if (e.target === solutionModal) closeModal();
    });
  }

  // Fechar o Modal de Vídeo ao clicar no backdrop escuro
  const videoFullscreenModal = document.getElementById('videoFullscreenModal');
  if (videoFullscreenModal) {
    videoFullscreenModal.addEventListener('click', (e) => {
      if (e.target === videoFullscreenModal) window.closeVideoModal();
    });
  }

  // Alternar colapso/expansão de Possíveis Causas no Modal de Solução
  const causesToggleBtn = document.getElementById('causesToggleBtn');
  if (causesToggleBtn && !causesToggleBtn.getAttribute('onclick')) {
    causesToggleBtn.addEventListener('click', window.toggleCausesSection);
  }

  // Tecla ESC fecha modais ativos
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const vModal = document.getElementById('videoFullscreenModal');
      if (vModal && vModal.style.display === 'flex') {
        window.closeVideoModal();
      } else if (solutionModal && solutionModal.style.display === 'flex') {
        closeModal();
      } else if (systemHelpMenuModal && systemHelpMenuModal.style.display === 'flex') {
        closeMenuModal(true);
      }
    }
  });

  // Botão Voltar ao Topo
  window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'flex';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// 4. ABRIR E FECHAR O MODAL DE MENU DE OPÇÕES (MENSAGENS / AJUDA DO SISTEMA)
function openMenuModal() {
  if (!systemHelpMenuModal) return;
  systemHelpMenuModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Não focar automaticamente para permitir navegação livre
  if (modalSearchInput && document.activeElement === modalSearchInput) {
    modalSearchInput.blur();
  }
}

// 5. RENDERIZAÇÃO DA LISTA DE OPÇÕES DO MENU (FILTRO POR TIPO E ORDENAÇÃO)
function applyMenuFilterAndSort() {
  const query = modalSearchInput ? modalSearchInput.value : '';
  const normalizedQuery = normalizeString(query);

  let filtered = HELP_DATA.filter(item => {
    // 1. Filtro por tipo/categoria do cartão
    if (currentCategoryFilter !== 'todos' && item.category !== currentCategoryFilter) {
      return false;
    }
    // 2. Filtro por busca textual inteligente
    if (!normalizedQuery) return true;
    const titleMatch = normalizeString(item.title).includes(normalizedQuery);
    const subtitleMatch = normalizeString(item.subtitle).includes(normalizedQuery);
    const categoryMatch = normalizeString(item.categoryLabel).includes(normalizedQuery);
    const tagMatch = item.tags && item.tags.some(tag => normalizeString(tag).includes(normalizedQuery));
    
    return titleMatch || subtitleMatch || categoryMatch || tagMatch;
  });

  renderMenuOptionsList(filtered, currentSortOrder);
}

function renderMenuOptionsList(data, sortOrder = currentSortOrder) {
  if (!menuOptionsList) return;

  if (data.length === 0) {
    menuOptionsList.innerHTML = `
      <div style="text-align: center; padding: 24px; color: #cbd5e1;">
        <p style="font-size: 1rem; font-weight: 600;">Nenhuma opção localizada para este filtro.</p>
        <p style="font-size: 0.85rem; margin-top: 4px;">Tente selecionar outro tipo ou limpar os termos de pesquisa.</p>
      </div>
    `;
    return;
  }

  // Se o usuário selecionou "Organizar por Tipo" e está visualizando todos os itens
  if (sortOrder === 'type' && currentCategoryFilter === 'todos') {
    const categoryConfigs = [
      { key: 'video', label: '🎥 VÍDEOS TUTORIAIS', class: 'group-video' },
      { key: 'dica', label: '💡 DICAS DO SISTEMA', class: 'group-dica' },
      { key: 'conexao', label: '📶 CONEXÃO & DADOS', class: 'group-conexao' },
      { key: 'login', label: '🔑 LOGIN & PERMISSÃO', class: 'group-login' },
      { key: 'checklist', label: '📋 CHECKLIST INICIAL', class: 'group-checklist' }
    ];

    let overallIndex = 1;
    let html = '';

    categoryConfigs.forEach(cfg => {
      const groupItems = data
        .filter(x => x.category === cfg.key)
        .sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));

      if (groupItems.length > 0) {
        html += `
          <div class="menu-group-header ${cfg.class}">
            <span>${cfg.label} (${groupItems.length})</span>
          </div>
        `;

        html += groupItems.map(item => `
          <div class="menu-option-item" data-id="${item.id}">
            <div class="menu-option-num">${overallIndex++}</div>
            <div class="menu-option-title">${item.title}</div>
            <span class="menu-option-badge ${item.badgeClass}">${item.categoryLabel}</span>
            <span class="menu-option-arrow">↗</span>
          </div>
        `).join('');
      }
    });

    menuOptionsList.innerHTML = html;
  } else {
    // Ordenar de A a Z por título
    const sorted = [...data].sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));

    menuOptionsList.innerHTML = sorted.map((item, index) => `
      <div class="menu-option-item" data-id="${item.id}">
        <div class="menu-option-num">${index + 1}</div>
        <div class="menu-option-title">${item.title}</div>
        <span class="menu-option-badge ${item.badgeClass}">${item.categoryLabel}</span>
        <span class="menu-option-arrow">↗</span>
      </div>
    `).join('');
  }

  // Adicionar eventos de clique em cada opção do menu
  document.querySelectorAll('.menu-option-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      openedFromMenu = true;
      closeMenuModal(false); // Fecha o menu sem resetar o estado de navegação
      openModal(id);
    });
  });
}

function updateCategoryPillCounts() {
  const counts = {
    todos: HELP_DATA.length,
    video: HELP_DATA.filter(x => x.category === 'video').length,
    dica: HELP_DATA.filter(x => x.category === 'dica').length,
    conexao: HELP_DATA.filter(x => x.category === 'conexao').length,
    login: HELP_DATA.filter(x => x.category === 'login').length,
    checklist: HELP_DATA.filter(x => x.category === 'checklist').length
  };

  document.querySelectorAll('.cat-pill-btn').forEach(pill => {
    const cat = pill.dataset.category;
    const badge = pill.querySelector('.pill-badge');
    if (badge && counts[cat] !== undefined) {
      badge.textContent = counts[cat];
    }
  });
}

function normalizeString(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function closeMenuModal(resetMenuState = true) {
  if (systemHelpMenuModal) systemHelpMenuModal.style.display = 'none';
  if (resetMenuState) openedFromMenu = false;
  
  if (solutionModal && solutionModal.style.display === 'none') {
    document.body.style.overflow = 'auto';
  }
}

// 6. RENDERIZAÇÃO DOS CARDS NA PÁGINA PRINCIPAL
function renderCards() {
  if (!cardsGrid) return;
  cardsGrid.style.display = 'grid';
  cardsGrid.innerHTML = HELP_DATA.map(item => createCardHTML(item)).join('');
  
  document.querySelectorAll('.error-card').forEach(card => {
    card.addEventListener('click', () => {
      const itemId = card.dataset.id;
      openedFromMenu = false; // Aberto direto pelo card da tela inicial
      openModal(itemId);
    });
  });
}

function createCardHTML(item) {
  let previewHTML = '';

  if (item.previewType === 'dark-alert-preview') {
    previewHTML = `
      <div class="mini-app-preview">
        <div class="mini-dark-alert">
          <div class="mini-alert-header">
            <span class="mini-alert-icon-circle">!</span> ${item.alertTitle || 'Erro'}
          </div>
          <div class="mini-alert-body">
            ${item.alertMessage}
          </div>
          <div class="mini-alert-btn">Fechar</div>
        </div>
      </div>
    `;
  } else if (item.previewType === 'info-alert-preview') {
    previewHTML = `
      <div class="mini-app-preview">
        <div class="mini-dark-alert">
          <div class="mini-alert-header mini-info-header">
            <span class="info-icon-rect">i</span> ${item.alertTitle || 'Informações'}
          </div>
          <div class="mini-alert-body">
            ${item.alertMessage}
          </div>
          <div class="mini-alert-btn-center">OK</div>
        </div>
      </div>
    `;
  } else if (item.previewType === 'loading-preview') {
    previewHTML = `
      <div class="mini-app-preview">
        <div class="mini-loading-preview">
          <div class="loading-header">Por favor aguarde</div>
          <div class="loading-title">${item.previewText}</div>
          <div class="loading-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    `;
  } else if (item.previewType === 'login-alert-preview') {
    previewHTML = `
      <div class="mini-app-preview">
        <div class="mini-login-preview">
          <span class="login-tag-badge">${item.alertMessage}</span>
        </div>
      </div>
    `;
  } else if (item.previewType === 'checklist-card') {
    previewHTML = `
      <div class="mini-app-preview" style="background: #eef2ff; border-color: #c7d2fe;">
        <div style="font-size: 0.78rem; font-weight: 600; color: #3730a3; text-align: center;">
          📋 1. Loja &nbsp;&bull;&nbsp; 2. Atualizar
        </div>
      </div>
    `;
  } else if (item.previewType === 'nfe-boleto-preview') {
    previewHTML = `
      <div class="mini-app-preview mini-nfe-preview">
        <div class="mini-nfe-header">
          <span class="mini-nfe-tag">💡 DICA DO SISTEMA</span>
          <span class="mini-nfe-status">NFe & Boleto</span>
        </div>
        <div class="mini-nfe-body">
          <div class="mini-nfe-line"><strong>Pesquisar Pedido:</strong> Filtro Notas Emitidas</div>
          <div class="mini-nfe-line"><strong>Títulos dos Clientes:</strong> Boletos a Vencer / Vencidos</div>
        </div>
        <div class="mini-nfe-icons">
          <span class="nfe-icon-circle" title="Consultar">🔍</span>
          <span class="nfe-icon-circle" title="Status">🚩</span>
          <span class="nfe-icon-circle" title="Financeiro">💲</span>
          <span class="nfe-icon-circle" title="Duplicatas">📄</span>
          <span class="nfe-icon-circle nfe-icon-highlight" title="Download da Nota Fiscal (NFe)">📄👁️</span>
        </div>
      </div>
    `;
  } else if (item.previewType === 'order-status-preview') {
    previewHTML = `
      <div class="mini-app-preview" style="background: #fff5f5; border: 1px solid #fecaca; text-align: left; padding: 10px 12px; border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">
          <span>Pedido: 9999999</span>
          <span style="color: #0f172a;">R$ 99999,20</span>
        </div>
        <div style="font-size: 0.73rem; color: #475569; margin-bottom: 2px;">Cliente: UNIFORT HOTSALES</div>
        <div style="font-size: 0.74rem; font-weight: 700; color: #dc2626; margin-top: 5px; display: inline-block; background: #fee2e2; padding: 2px 6px; border-radius: 4px;">
          Status Hotsales: Erro ERP
        </div>
      </div>
    `;
  } else if (item.previewType === 'video-preview') {
    previewHTML = `
      <div class="mini-app-preview" style="background: #18181b; border: 1px solid #27272a; text-align: center; padding: 12px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 8px;">
        <svg viewBox="0 0 24 24" width="28" height="28" style="vertical-align: middle;">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#ff0000"/>
          <polygon points="9.545,8.432 15.818,12 9.545,15.568" fill="#ffffff"/>
        </svg>
        <span style="color: #ffffff; font-size: 0.82rem; font-weight: 600;">Vídeo Explicativo &bull; YouTube</span>
      </div>
    `;
  } else if (item.previewType === 'airplane-signal-preview') {
    previewHTML = `
      <div class="mini-app-preview" style="background: #0f172a; border: 1px solid #334155; padding: 10px; border-radius: 8px; text-align: center;">
        <div style="display: flex; align-items: center; justify-content: space-around; gap: 8px;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 3px;">
            <img src="assets/modo_aviao_status.png" alt="Modo Avião" style="height: 38px; border-radius: 6px; border: 1px solid #ef4444; object-fit: contain;">
            <span style="font-size: 0.68rem; color: #fca5a5; font-weight: 600;">✈️ Modo Avião Ativo</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 3px;">
            <img src="assets/sinal_fraco_status.png" alt="Sinal Fraco" style="height: 38px; border-radius: 6px; border: 1px solid #f59e0b; object-fit: contain;">
            <span style="font-size: 0.68rem; color: #fcd34d; font-weight: 600;">📶 Sinal Fraco / H+</span>
          </div>
        </div>
      </div>
    `;
  }

  const bottomActionText = item.category === 'dica' ? 'Ver instruções passo a passo' : (item.category === 'video' ? 'Assistir ao vídeo tutorial' : 'Abrir solução passo a passo');

  return `
    <div class="error-card" data-id="${item.id}">
      <div class="card-top">
        <span class="card-badge ${item.badgeClass}">${item.categoryLabel}</span>
        <h3>${item.title}</h3>
        <p class="card-subtitle">${item.subtitle}</p>
        ${previewHTML}
      </div>
      <div class="card-bottom">
        <span>${bottomActionText}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  `;
}

// 7. ABRIR E FECHAR O MODAL DE SOLUÇÃO (COM RETORNO AUTOMÁTICO AO MENU DE OPÇÕES)
function openModal(id) {
  const item = HELP_DATA.find(x => x.id === id);
  if (!item || !solutionModal) return;

  if (modalCategory) {
    modalCategory.textContent = item.categoryLabel;
    modalCategory.className = `modal-badge ${item.badgeClass}`;
  }
  if (modalTitle) modalTitle.textContent = item.title;
  if (modalSubtitle) modalSubtitle.textContent = item.subtitle;
  if (modalNoticeText) modalNoticeText.textContent = item.problemNotice || 'Instruções recomendadas para solução deste erro.';

  if (modalVisualPreview) {
    const previewContent = createCardPreviewLarge(item);
    if (previewContent) {
      modalVisualPreview.style.display = 'block';
      modalVisualPreview.innerHTML = previewContent;
    } else {
      modalVisualPreview.style.display = 'none';
      modalVisualPreview.innerHTML = '';
    }
  }

  const causesSection = document.getElementById('causesSection');
  const causesContentBox = document.getElementById('causesContentBox');
  const causesToggleBtn = document.getElementById('causesToggleBtn');
  const causesStatusHint = document.getElementById('causesStatusHint');

  if (causesSection) {
    if (item.causes && item.causes.length > 0) {
      causesSection.style.display = 'block';
      causesSection.classList.remove('is-expanded');
      const causesList = document.getElementById('modalCausesList');
      if (causesList) {
        causesList.innerHTML = item.causes.map(c => `<li>${formatMarkdownText(c)}</li>`).join('');
      }
      // Inicia sempre recolhido/oculto conforme solicitado
      if (causesContentBox) {
        causesContentBox.style.display = 'none';
        causesContentBox.classList.remove('is-open');
      }
      if (causesToggleBtn) causesToggleBtn.setAttribute('aria-expanded', 'false');
      if (causesStatusHint) causesStatusHint.textContent = '(clique para ver)';
    } else {
      causesSection.style.display = 'none';
    }
  }

  const stepsSection = document.getElementById('stepsSection');
  if (stepsSection) {
    if (item.suggestions && item.suggestions.length > 0) {
      stepsSection.style.display = 'block';
      const stepsHeaderTitle = stepsSection.querySelector('h4');
      if (stepsHeaderTitle) {
        if (item.category === 'dica') {
          stepsHeaderTitle.innerHTML = '<span class="glowing-bulb">💡</span> Passo a Passo da Dica:';
        } else if (item.category === 'video') {
          stepsHeaderTitle.innerHTML = '<span class="glowing-bulb">🎥</span> Vídeo Tutorial:';
        } else {
          stepsHeaderTitle.innerHTML = '<span class="glowing-bulb">💡</span> Passo a Passo de Solução:';
        }
      }
      if (modalStepsList) {
        modalStepsList.innerHTML = item.suggestions.map((s, index) => `
          <li>
            <div class="step-num-pill">${index + 1}</div>
            <div class="step-text-content">${formatMarkdownText(s)}</div>
          </li>
        `).join('');
      }
    } else {
      stepsSection.style.display = 'none';
    }
  }

  const modalYoutubeBtn = document.getElementById('modalYoutubeBtn');
  if (modalYoutubeBtn) {
    if (item.youtubeVideoUrl) {
      modalYoutubeBtn.style.display = 'inline-flex';
      modalYoutubeBtn.onclick = (e) => {
        if (e) e.stopPropagation();
        window.openVideoModal(item.youtubeVideoEmbed, item.youtubeVideoUrl);
      };
    } else {
      modalYoutubeBtn.style.display = 'none';
      modalYoutubeBtn.onclick = null;
    }
  }

  const modalAppDownloadBanner = document.querySelector('.modal-app-download-banner');
  if (modalAppDownloadBanner) {
    if (item.showStoreBanner) {
      modalAppDownloadBanner.style.display = 'block';
    } else {
      modalAppDownloadBanner.style.display = 'none';
    }
  }

  solutionModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  const modalBody = solutionModal.querySelector('.modal-body');
  if (modalBody) modalBody.scrollTop = 0;
}

function closeModal() {
  if (solutionModal) solutionModal.style.display = 'none';

  // Se o modal de solução foi aberto a partir do menu, retorna ao menu de opções ao fechar!
  if (openedFromMenu) {
    openedFromMenu = false;
    openMenuModal();
  } else {
    document.body.style.overflow = 'auto';
  }
}

function createCardPreviewLarge(item) {
  if (item.previewType === 'dark-alert-preview') {
    return `
      <div class="large-alert-popup">
        <div class="large-alert-header">
          <span class="large-alert-icon-circle">!</span> ${item.alertTitle || 'Erro'}
        </div>
        <div class="large-alert-body">
          ${item.alertMessage}
        </div>
        <div class="large-alert-footer">
          Fechar
        </div>
      </div>
    `;
  } else if (item.previewType === 'info-alert-preview') {
    return `
      <div class="large-alert-popup">
        <div class="large-alert-header large-info-header">
          <span class="info-icon-rect-lg">i</span> ${item.alertTitle || 'Informações'}
        </div>
        <div class="large-alert-body" style="text-align: center; font-size: 0.98rem; padding: 22px 20px;">
          ${item.alertMessage}
        </div>
        <div class="large-alert-footer-center">
          OK
        </div>
      </div>
    `;
  } else if (item.previewType === 'loading-preview') {
    return `
      <div style="background: #fff; border: 1px solid #d1d5db; border-radius: 8px; padding: 20px; max-width: 380px; margin: 0 auto; text-align: center;">
        <div style="font-size: 0.85rem; color: #9ca3af; margin-bottom: 8px; border-bottom: 1px solid #f3f4f6; padding-bottom: 6px;">Por favor aguarde</div>
        <div style="font-size: 0.98rem; font-weight: 600; color: #374151; margin-bottom: 12px;">${item.previewText}</div>
        <div class="loading-dots" style="transform: scale(1.4);">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
  } else if (item.previewType === 'login-alert-preview') {
    return `
      <div style="background: #fff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; max-width: 380px; margin: 0 auto; text-align: center;">
        <div style="display: inline-block; background-color: #374151; color: #fff; padding: 8px 16px; border-radius: 6px; font-size: 0.88rem; font-weight: 500;">
          ${item.alertMessage}
        </div>
      </div>
    `;
  } else if (item.previewType === 'nfe-boleto-preview') {
    return `
      <div class="large-nfe-preview-box">
        <div class="nfe-preview-card">
          <div class="nfe-card-title">Pedido: 199999 <span class="nfe-card-date">(28/09/2026 17:13:59)</span></div>
          <div class="nfe-card-field"><strong>Cliente:</strong> Unifort HotSales LTDA</div>
          <div class="nfe-card-field"><strong>Cód. Cliente:</strong> 0000000001</div>
          <div class="nfe-card-field"><strong>NFe:</strong> 000000008 <span class="nfe-sep">/</span> <strong>Vlr Fat:</strong> R$ 3.000,00</div>
          <div class="nfe-card-field"><strong>Vendido e entregue por:</strong> UNIFORT LTDA</div>
          
          <div class="nfe-action-buttons-row">
            <div class="nfe-action-btn" title="Consultar detalhes">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0099ff" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><circle cx="11" cy="14" r="3"></circle><line x1="13.5" y1="16.5" x2="16.5" y2="19.5"></line></svg>
            </div>
            <div class="nfe-action-btn" title="Bandeira / Status">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0099ff" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
            </div>
            <div class="nfe-action-btn" title="Valores">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0099ff" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="12" y1="7" x2="12" y2="17"></line><line x1="9" y1="9" x2="15" y2="9"></line><line x1="9" y1="13" x2="15" y2="13"></line></svg>
            </div>
            <div class="nfe-action-btn" title="Duplicatas">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0099ff" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="13" y2="17"></line></svg>
            </div>
            <div class="nfe-action-btn nfe-action-btn-highlight" title="Baixar / Visualizar Nota Fiscal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0099ff" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><circle cx="11" cy="14" r="3.5"></circle><circle cx="11" cy="14" r="1.5" fill="#0099ff"></circle></svg>
              <span class="nfe-pulse-badge">Emitir DANFE</span>
            </div>
          </div>
        </div>

        <div class="nfe-boleto-badge-callout">
          <div class="boleto-callout-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"></rect><line x1="7" y1="8" x2="11" y2="8"></line><line x1="7" y1="12" x2="13" y2="12"></line><line x1="7" y1="16" x2="17" y2="16"></line><circle cx="17" cy="9" r="2"></circle></svg>
          </div>
          <div class="boleto-callout-text">
            <strong>Títulos dos Clientes:</strong> menu para consulta e download de <strong>boletos a vencer ou já vencidos</strong>.
          </div>
        </div>
      </div>
    `;
  } else if (item.previewType === 'order-status-preview') {
    return `
      <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; max-width: 420px; margin: 0 auto; box-shadow: 0 4px 14px rgba(0,0,0,0.08); text-align: left;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px 12px; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; color: #64748b; font-size: 0.78rem;">
          <span>Pesquisar por nº pedido ou nome do cliente</span>
          <span>🔍</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div style="font-size: 0.95rem; font-weight: 700; color: #0f172a;">Pedido: 9999999 <span style="font-size: 0.78rem; font-weight: 400; color: #64748b;">(30/09/2026 10:37:48)</span></div>
          <div style="font-size: 1.05rem; font-weight: 700; color: #0f172a;">R$ 99999,99</div>
        </div>
        <div style="font-size: 0.82rem; color: #334155; margin-bottom: 3px;"><strong>Cliente:</strong> UNIFORT HOTSALES</div>
        <div style="font-size: 0.82rem; color: #334155; margin-bottom: 3px;"><strong>Cód. Cliente:</strong> 0000000001</div>
        <div style="font-size: 0.82rem; color: #334155; margin-bottom: 3px;"><strong>NFe:</strong> 0000 / <strong>Vlr Fat:</strong> R$ 0,00</div>
        <div style="font-size: 0.82rem; color: #334155; margin-bottom: 3px;"><strong>Vendido e entregue por:</strong> UNIFORT LTDA</div>
        <div style="font-size: 0.82rem; color: #334155; margin-bottom: 3px;"><strong>Canal de Venda:</strong> Vendedor</div>
        <div style="font-size: 0.82rem; color: #334155; margin-bottom: 3px;"><strong>Vendedor:</strong> UNIFORT HOTSALES</div>
        <div style="font-size: 0.82rem; color: #334155; margin-bottom: 5px;"><strong>Versão do sistema:</strong> APP:2.18.15</div>
        <div style="font-size: 0.88rem; font-weight: 700; color: #dc2626; margin-top: 8px; padding: 5px 10px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 4px; display: inline-block;">
          Status Hotsales: Erro ERP
        </div>
        <div style="display: flex; gap: 12px; align-items: center; margin-top: 14px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
          <div style="width: 34px; height: 34px; border-radius: 50%; border: 1.6px solid #0099ff; display: flex; align-items: center; justify-content: center; font-size: 0.85rem;" title="Detalhes">🔍</div>
          <div style="width: 34px; height: 34px; border-radius: 50%; border: 1.6px solid #0099ff; display: flex; align-items: center; justify-content: center; font-size: 0.85rem;" title="Bandeira">🚩</div>
          <div style="width: 34px; height: 34px; border-radius: 50%; border: 1.6px solid #0099ff; display: flex; align-items: center; justify-content: center; font-size: 0.85rem;" title="Financeiro">💲</div>
          <div style="width: 34px; height: 34px; border-radius: 50%; border: 1.6px solid #0099ff; display: flex; align-items: center; justify-content: center; font-size: 0.85rem;" title="Duplicatas">📄</div>
        </div>
      </div>
    `;
  } else if (item.previewType === 'video-preview') {
    return `
      <div style="background: #09090b; border: 1px solid rgba(255,255,255,0.15); border-radius: 10px; padding: 16px; max-width: 440px; margin: 0 auto; text-align: center; box-shadow: 0 4px 18px rgba(0,0,0,0.4);">
        <div style="position: relative; width: 100%; border-radius: 8px; overflow: hidden; background: #000; padding: 22px 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.1); cursor: pointer;" onclick="window.openVideoModal('${item.youtubeVideoEmbed}', '${item.youtubeVideoUrl}')" title="Clique para assistir ao vídeo no YouTube">
          <svg viewBox="0 0 24 24" width="48" height="48" style="margin-bottom: 8px; filter: drop-shadow(0 2px 8px rgba(255,0,0,0.6));">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#ff0000"/>
            <polygon points="9.545,8.432 15.818,12 9.545,15.568" fill="#ffffff"/>
          </svg>
          <div style="color: #ffffff; font-size: 0.96rem; font-weight: 700; margin-bottom: 4px;">Uso do HotSales</div>
          <div style="color: #a1a1aa; font-size: 0.8rem;">Toque para assistir ao tutorial em tela cheia</div>
        </div>
      </div>
    `;
  } else if (item.previewType === 'airplane-signal-preview') {
    return `
      <div style="background: #0b1329; border: 1px solid rgba(255,255,255,0.18); border-radius: 12px; padding: 18px; max-width: 440px; margin: 0 auto; box-shadow: 0 8px 24px rgba(0,0,0,0.4);">
        <div style="text-align: center; margin-bottom: 12px;">
          <span style="display: inline-block; background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(239, 68, 68, 0.4); color: #fca5a5; font-size: 0.74rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">
            ⚠️ Atenção aos Símbolos da Barra de Status
          </span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px;">
          <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(239, 68, 68, 0.5); border-radius: 8px; padding: 10px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div style="font-size: 0.74rem; font-weight: 700; color: #ef4444; margin-bottom: 6px; display: flex; align-items: center; gap: 4px;">
              <span>✈️</span> Modo Avião Ativo
            </div>
            <img src="assets/modo_aviao_status.png" alt="Modo Avião Ativo" style="width: 100%; max-width: 170px; border-radius: 6px; border: 1px solid rgba(239, 68, 68, 0.3); box-shadow: 0 2px 8px rgba(0,0,0,0.3); object-fit: contain;">
            <div style="font-size: 0.72rem; color: #cbd5e1; margin-top: 6px; line-height: 1.3;">
              Bloqueia todas as transmissões de internet.
            </div>
          </div>
          <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(245, 158, 11, 0.5); border-radius: 8px; padding: 10px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div style="font-size: 0.74rem; font-weight: 700; color: #f59e0b; margin-bottom: 6px; display: flex; align-items: center; gap: 4px;">
              <span>📶</span> Internet Fraca / H+
            </div>
            <img src="assets/sinal_fraco_status.png" alt="Sinal Fraco H+" style="width: 100%; max-width: 170px; border-radius: 6px; border: 1px solid rgba(245, 158, 11, 0.3); box-shadow: 0 2px 8px rgba(0,0,0,0.3); object-fit: contain;">
            <div style="font-size: 0.72rem; color: #cbd5e1; margin-top: 6px; line-height: 1.3;">
              Sem tráfego de dados suficiente para o app.
            </div>
          </div>
        </div>
        <div style="background: rgba(0, 136, 204, 0.15); border-left: 3px solid #00bcff; padding: 8px 12px; border-radius: 4px; font-size: 0.78rem; color: #e0f2fe; line-height: 1.4;">
          <strong>Indicação:</strong> Desative o Modo Avião nas configurações do smartphone e certifique-se de que o sinal de dados ou Wi-Fi esteja estável antes de utilizar o sistema.
        </div>
      </div>
    `;
  }
  return '';
}

// 8. PARSER DE MARKDOWN PARA CONVERTER NEGRITOS E LINKS INTERATIVOS
function formatMarkdownText(text) {
  if (!text) return '';
  
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');

  formatted = formatted.replace(/\[(.*?)\]\((.*?)\)/g, (match, linkText, url) => {
    // Se for link interno para outro diagnóstico do sistema (ex: #cache-cleanup-guide)
    if (url.startsWith('#')) {
      const targetId = url.replace('#', '');
      return `<button type="button" class="inline-web-link internal-guide-link" onclick="openModal('${targetId}')" title="Abrir passo a passo de ${linkText}"><span class="link-icon">🧹</span> ${linkText} <span class="link-arrow">↗</span></button>`;
    }

    const isDirectLink = url.includes('webunifort.hotsales.com.br');
    const isStoreLink = url.includes('play.google.com') || url.includes('apps.apple.com');
    const isYoutubeLink = url.includes('youtube.com') || url.includes('youtu.be');
    
    let className = 'direct-web-link';
    if (isYoutubeLink) {
      className = 'inline-web-link youtube-web-link';
    } else if (isDirectLink || isStoreLink) {
      className = 'inline-web-link';
    }

    let icon = '🔗';
    if (isDirectLink) {
      icon = '🌐';
    } else if (isStoreLink) {
      icon = '📱';
    } else if (isYoutubeLink) {
      icon = '<svg viewBox="0 0 24 24" width="16" height="16" style="vertical-align: -2px; fill: #ff0000; margin-right: 3px;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/><polygon points="9.545,8.432 15.818,12 9.545,15.568" fill="#ffffff"/></svg>';
    }
    
    return `<a href="${url}" target="_blank" rel="noopener" class="${className}"><span class="link-icon">${icon}</span> ${linkText} <span class="link-arrow">↗</span></a>`;
  });

  return formatted;
}

// ==========================================================================
// 9. RECURSOS PROGRESSIVE WEB APP (PWA) & INSTALAÇÃO EM CELULAR / PC
// ==========================================================================
let deferredInstallPrompt = null;
const pwaInstallBtn = document.getElementById('pwaInstallBtn');
const pwaBottomBanner = document.getElementById('pwaBottomBanner');
const pwaBannerInstallBtn = document.getElementById('pwaBannerInstallBtn');
const pwaBannerCloseBtn = document.getElementById('pwaBannerCloseBtn');
const pwaIosModal = document.getElementById('pwaIosModal');
const pwaIosCloseBtn = document.getElementById('pwaIosCloseBtn');
const pwaIosUnderstoodBtn = document.getElementById('pwaIosUnderstoodBtn');
const toastContainer = document.getElementById('toastContainer');

// Detecção de ambiente iOS / Safari
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

// Detecção se já está instalado e rodando em modo standalone
const isAppStandalone = () => {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
};

// Registro do Service Worker
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => {
          console.log('[PWA] Service Worker registrado com sucesso no escopo:', reg.scope);
          try { reg.update(); } catch (_) {}
        })
        .catch((err) => {
          console.warn('[PWA] Falha no registro do Service Worker:', err);
        });
    });
  }
}

// Inicialização dos eventos de instalação do PWA
function initPwaInstall() {
  registerServiceWorker();

  // Se já estiver rodando como aplicativo instalado
  if (isAppStandalone()) {
    if (pwaInstallBtn) {
      pwaInstallBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <div class="app-btn-text">
          <span class="btn-sub">MODO APLICATIVO</span>
          <span class="btn-title">App Instalado ✓</span>
        </div>
      `;
      pwaInstallBtn.style.opacity = '0.9';
      pwaInstallBtn.title = 'Você já está utilizando o aplicativo instalado!';
      pwaInstallBtn.addEventListener('click', () => {
        showToast('Você já está utilizando este sistema como aplicativo instalado!');
      });
    }
    return;
  }

  // Captura do evento beforeinstallprompt (Chrome, Edge, Android etc.)
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;

    // Exibe o botão no cabeçalho
    if (pwaInstallBtn) pwaInstallBtn.style.display = 'flex';

    // Exibe banner inferior se não tiver sido fechado nesta sessão
    if (!sessionStorage.getItem('pwa_banner_dismissed')) {
      setTimeout(() => {
        if (pwaBottomBanner && deferredInstallPrompt && !isAppStandalone()) {
          pwaBottomBanner.style.display = 'block';
        }
      }, 2500);
    }
  });

  // Ação ao clicar no botão de instalação do cabeçalho
  if (pwaInstallBtn) {
    pwaInstallBtn.addEventListener('click', triggerPwaInstall);
  }

  // Ação ao clicar no botão do banner flutuante
  if (pwaBannerInstallBtn) {
    pwaBannerInstallBtn.addEventListener('click', triggerPwaInstall);
  }

  // Fechar banner inferior
  if (pwaBannerCloseBtn) {
    pwaBannerCloseBtn.addEventListener('click', () => {
      if (pwaBottomBanner) pwaBottomBanner.style.display = 'none';
      sessionStorage.setItem('pwa_banner_dismissed', 'true');
    });
  }

  // Evento disparado quando o app é instalado com sucesso
  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    if (pwaInstallBtn) {
      pwaInstallBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <div class="app-btn-text">
          <span class="btn-sub">CONCLUÍDO</span>
          <span class="btn-title">App Instalado ✓</span>
        </div>
      `;
    }
    if (pwaBottomBanner) pwaBottomBanner.style.display = 'none';
    showToast('🎉 Parabéns! Aplicativo instalado com sucesso no seu dispositivo.');
  });

  // Fechar modal do iOS
  if (pwaIosCloseBtn) {
    pwaIosCloseBtn.addEventListener('click', closeIosModal);
  }
  if (pwaIosUnderstoodBtn) {
    pwaIosUnderstoodBtn.addEventListener('click', closeIosModal);
  }
  if (pwaIosModal) {
    pwaIosModal.addEventListener('click', (e) => {
      if (e.target === pwaIosModal) closeIosModal();
    });
  }

  // Verificação de atalho na URL (?action=open-catalog)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('action') === 'open-catalog') {
    setTimeout(openMenuModal, 400);
  }
}

// Disparador do fluxo de instalação
function triggerPwaInstall() {
  if (isAppStandalone()) {
    showToast('Você já está utilizando a versão instalada!');
    return;
  }

  // Se for iOS (Safari), abre guia ilustrado de instalação
  if (isIos()) {
    openIosModal();
    return;
  }

  // Se o navegador suportar beforeinstallprompt
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast('Instalando aplicativo...');
      }
      deferredInstallPrompt = null;
      if (pwaBottomBanner) pwaBottomBanner.style.display = 'none';
    });
  } else {
    // Para navegadores desktop que não dispararam beforeinstallprompt ou caso o usuário use outro browser
    showToast('💡 Para instalar: toque no menu do seu navegador (⋮ ou Compartilhar) e escolha "Instalar Aplicativo" ou "Adicionar à tela inicial".', 6000);
  }
}

function openIosModal() {
  if (pwaIosModal) {
    pwaIosModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeIosModal() {
  if (pwaIosModal) {
    pwaIosModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Notificação visual toast
function showToast(message, duration = 4000) {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'pwa-toast';
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, duration);
}
