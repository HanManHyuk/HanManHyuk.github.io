var commandText = function(text){
  return "[[g;#EEEEEE;]" + text + "]";
}

var titleText = function(text){
  return "[[u;inherit;]" + text + "]";
}


var App = {
  intro: function(ret){
    if (typeof ret === 'undefined') ret = false;
    var greetText =
      "###################################################################################################################################\n"+
      "#[[b;#00DE12;]\t\t     ______  _______         _____    _____   ______    ____   ____  _____      _____  ____   ____  ____    ____  ]   \t#\n"+
      "#[[b;#00DE12;]\t\t    |      \\/       \\    ___|\\    \\  |\\    \\ |\\     \\  |    | |    ||\\    \\    /    /||    | |    ||    |  |    | ]  \t #\n"+
      "#[[b;#00DE12;]\t\t   /          /\\     \\  /    /\\    \\  \\\\    \\| \\     \\ |    | |    || \\    \\  /    / ||    | |    ||    |  |    | ] \t  #\n"+
      "#[[b;#00DE12;]\t\t  /     /\\   / /\\     ||    |  |    |  \\|    \\  \\     ||    |_|    ||  \\____\\/    /  /|    | |    ||    | /    // ]\t   #\n"+
      "#[[b;#00DE12;]\t\t /     /\\ \\_/ / /    /||    |__|    |   |     \\  |    ||    .-.    | \\ |    /    /  / |    | |    ||    |/ _ _//  ] \t  #\n"+
      "#[[b;#00DE12;]\t\t|     |  \\|_|/ /    / ||    .--.    |   |      \\ |    ||    | |    |  \\|___/    /  /  |    | |    ||    |\\    \\'  ]\t   #\n"+
      "#[[b;#00DE12;]\t\t|\\____\\       |____|  /|____|  |____|   |____||\\_____/||____| |____|     /____/  /    |\\___\\_|____||____|  \\____\\ ]\t   #\n"+
      "#[[b;#00DE12;]\t\t| |    |      |    | / |    |  |    |   |    |/ \\|   |||    | |    |    |`    | /     | |    |    ||    |   |    | ]\t  #\n"+
      "#[[b;#00DE12;]\t\t \\|____|      |____|/  |____|  |____|   |____|   |___|/|____| |____|    |_____|/       \\|____|____||____|   |____|]       #\n"+
      "#\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t                                                             #\n"+
      "#\t\tHi, I'm " + commandText('ManHYuk') + " - Backend Web Developer in Korea.\t\t\t\t\t\t\t\t\t\t\t\t                        #\n"+
      "#\t\tPlease type " +commandText('ls')+" or " +commandText('help')+ " for a list of commands.  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t #\n"+
      "#\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t     #\n"+
      "###################################################################################################################################\n";
    if (!ret) {
        this.echo("\n" + greetText);
    } else {
        return greetText;
    }
  },
  ls: function(){
    this.exec('menu');
  },
  rm: function(command){
    this.echo();
    this.echo("|  Oh no!! don't delete that!");
    this.echo();
  },
  cd: function(command){
    if(command){
      this.exec(command);
    }else{
      this.echo("|  directory is not selected.");
    }
  },
  find: function(command){
    if(command){
      this.exec(command);
    }else{
      this.echo("|  Please enter what you are looking for.");
    }
  },
  grep: function(command){
    if(command){
      this.exec(command);
    }else{
      this.echo("|  Please enter what you are looking for.");
    }
  },
  help: function(){
    this.exec('menu');
  },
  menu: function(){
    // this.echo();
    // this.echo("|  " + commandText("intro") + "               - Display Message of the Day");
    this.echo();
    this.echo("|  " + commandText("about") + "              - Summary of me");
    this.echo("|  " + commandText("work") + "               - My Professional Experience");
    this.echo("|  " + commandText("projects") + "           - Recent projects of mine");
    this.echo("|  " + commandText("skills") + "             - What I can do");
    this.echo("|  " + commandText("awards") + "             - Awards and features for my work");
    this.echo("|");
    this.echo("|  " + commandText("social") + "             - My Social Status");
    this.echo("|  " + commandText("contact") + "            - Contact me")
    this.echo("|");
    this.echo("|  " + commandText("download") + "           - DOWNLOAD MY RESUME! (pdf) ");
    this.echo("|  " + commandText("all") + "                - [[b;#00DE12;]Run all commands (recommended)]");
    this.echo();
  },
  social: function(){
    this.echo();
    this.echo("|  " + commandText("Blog") + ":         http://naver.com");
    this.echo("|  " + commandText("GitHub") + ":       https://github.com/HanManHyuk");
    //this.echo("|  " + commandText("LinkedIn") + ":     http://naver.com");
    //this.echo("|  " + commandText("Twitter") + ":      http://naver.com");
    this.echo();
  },
  github: function(){
    this.echo();
    this.echo("|  https://github.com/HanManHyuk");
    this.echo();
  },

  // unuse SNS
  // facebook: function(){
  //   this.echo();
  //   this.echo("|  http://naver.com");
  //   this.echo();
  // },
  //
  // linkedin: function(){
  //   this.echo();
  //   this.echo("|  http://naver.com");
  //   this.echo();
  // },
  //
  // twitter: function(){
  //   this.echo();
  //   this.echo("|  http://naver.com");
  //   this.echo();
  // },

  exp: function(){
    this.exec('work');
  },
  works: function(){
    this.exec('work');
  },
  work: function(){
    this.echo();
    this.echo("|   " + commandText('WORK'));
    this.echo();
  },
  whoami: function(){
    this.exec('about');
  },
  about: function(){
    this.echo();
    this.echo("|  Name:         " + commandText('ManHyuk Han'));
    this.echo("|");
    this.echo("|  Summary:      I am a Backend Web Developer (primarily " + commandText('Node.js') + ", " + commandText('Ruby') + ")");
    this.echo("|                I am a student at " + commandText('KwangWoon University')+" majoring in "+commandText('Computer Software')+".");
    this.echo("|");
    this.echo();
  },
  project: function(){
    this.exec('projects');
  },
  projects: function(){
    this.echo();
    this.echo("|  " + commandText('VV') + "    http://a.com                   ASDF                                             \n|    // ADSFA ");
    this.echo();
  },
  skill: function(){
    this.exec('skills');
  },
  skills: function(){
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Web Back-End] ");
    this.echo("|  " + commandText('Node.js w/ Express') + "     ##[[g;#5BD100;]@@@@]                                               ##");
    this.echo("|  " + commandText('Ruby w/ Rails') + "          ##[[g;#B2D100;]@@@@]                                               ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Web Front-End] ");
    this.echo("|  " + commandText('Javascript') + "             ##[[g;#5BD100;]@@@@]                                               ##");
    this.echo("|  " + commandText('CSS / SASS') + "             ##[[g;#B2D100;]@@]                                                 ##");
    this.echo("|  " + commandText('HTML5') + "                  ##[[g;#B2D100;]@@]                                                 ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Database] ");
    this.echo("|  " + commandText('MariaDB (MySQL)') + "        ##[[g;#B2D100;]@@]                                                 ##");
    this.echo("|  " + commandText('MongoDB') + "                ##[[g;#D1B900;]@@]                                                 ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Native Mobile / Game Dev] ");
    this.echo("|  " + commandText('Unity (C#)') + "             ##[[g;#D1B900;]@@]                                                 ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]ETC] ");
    // this.echo("|");
    this.echo("|  " + commandText('Ubuntu Linux') + "           ##[[g;#B2D100;]@@]                                                 ##");
    this.echo("|  " + commandText('AWS') + "                    ##[[g;#D13F00;]@@]                                                 ##");
    this.echo();
  },
  contact: function(){
    this.echo();
    this.echo("|  " + commandText("Email") + ":         10000hyuk@naver.com");
    this.echo("|  " + commandText("Phone") + ":         (010) 1231 1231");
    this.echo();
  },
  credit: function(){
    this.exec('credits');
  },
  credits: function(){
    this.echo();
    this.echo("|  Using " + commandText('Jquery Terminal Emulator') + " by " + commandText('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
    this.echo();
  },
  award: function(){
    this.exec('awards');
  },

  awards: function(){
    this.echo();
    this.echo("|  " + commandText('aaaaa') + "                                Oct  2015  \n|   | W                     project: http://a.com");
    this.echo("|  " + commandText('3r') + "                                                           Sept 2015  \n|   | S                     project: http://a.com");
    this.echo("|  " + commandText('2') + "                                                            Jan  2015  \n|   | D");
    this.echo("|  " + commandText('11111') + "                                                        Dec  2014  \n|   | G");
    this.echo();

  },
  download: function(){
    window.location.href = "./mm.pdf";
  },
  blog: function(){
    window.location.href = "http://naver.com";
  },

  resume: function(){
    this.echo();
    this.echo("|  " + commandText("DOWNLOAD MY RESUME!") + "       http://naver.com");
    this.echo();

  },
  cls: function(){
    this.clear();
  },
  clear: function(){
    this.clear();
  },
  echo: function(command){
    this.echo(command);
  },
  all: function(){
    this.clear();
    this.exec('intro');
    this.exec('about');
    this.exec('work');
    this.exec('projects');
    this.exec('skills');
    this.exec('awards');
    this.exec('social');
    this.exec('contact');
    this.exec('resume');
  },
  sudo: function(){
    this.exec('login');
  },
  login: function(){
    this.echo();
    this.echo("|  login function currently under development");
    this.echo();
  },
  du: function(){
    this.echo();
    this.echo("|  100%");
    this.echo();
  },
  mv: function(){
    this.echo();
    this.echo("|  dont't move!");
    this.echo();
  },
  cp: function(){
    this.echo();
    this.echo("|  dont't copy!");
    this.echo();
  },
  mkdir: function(){
    this.echo();
    this.echo("|  mkdir function currently under development");
    this.echo();
  },

}

jQuery(document).ready(function($) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('body').terminal(App, {
      greetings: function(cb){
        that = this;
        // cb(App.intro(true));
        cb(App.mobile());
      },

      onBlur: function() {
        // prevent loosing focus
        return false;
      },
      completion: true,
      checkArity: false
    });
  } else {
    $('body').terminal(App, {
      greetings: function(cb){
        cb(App.intro(true));
      },

      onBlur: function() {
          // prevent loosing focus
          return false;
      },
      completion: true,
      checkArity: false
    });
  }
});
// github user test
// edit email
