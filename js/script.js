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
      "|[[b;#00DE12;]\t\t     ______  _______         _____    _____   ______    ____   ____  _____      _____  ____   ____  ____    ____  ]   \t|\n"+
      "|[[b;#00DE12;]\t\t    |      \\/       \\    ___|\\    \\  |\\    \\ |\\     \\  |    | |    ||\\    \\    /    /||    | |    ||    |  |    | ]  \t |\n"+
      "|[[b;#00DE12;]\t\t   /          /\\     \\  /    /\\    \\  \\\\    \\| \\     \\ |    | |    || \\    \\  /    / ||    | |    ||    |  |    | ] \t  |\n"+
      "|[[b;#00DE12;]\t\t  /     /\\   / /\\     ||    |  |    |  \\|    \\  \\     ||    |_|    ||  \\____\\/    /  /|    | |    ||    | /    // ]\t   |\n"+
      "|[[b;#00DE12;]\t\t /     /\\ \\_/ / /    /||    |__|    |   |     \\  |    ||    .-.    | \\ |    /    /  / |    | |    ||    |/ _ _//  ] \t  |\n"+
      "|[[b;#00DE12;]\t\t|     |  \\|_|/ /    / ||    .--.    |   |      \\ |    ||    | |    |  \\|___/    /  /  |    | |    ||    |\\    \\'  ]\t   |\n"+
      "|[[b;#00DE12;]\t\t|\\____\\       |____|  /|____|  |____|   |____||\\_____/||____| |____|     /____/  /    |\\___\\_|____||____|  \\____\\ ]\t   |\n"+
      "|[[b;#00DE12;]\t\t| |    |      |    | / |    |  |    |   |    |/ \\|   |||    | |    |    |`    | /     | |    |    ||    |   |    | ]\t  |\n"+
      "|[[b;#00DE12;]\t\t \\|____|      |____|/  |____|  |____|   |____|   |___|/|____| |____|    |_____|/       \\|____|____||____|   |____|]       |\n"+
      "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t                                                             |\n"+
      "|\t\tHi, I'm " + commandText('ManHYuk') + " - Backend Web Developer in Korea.\t\t\t\t\t\t\t\t\t\t\t\t                        |\n"+
      "|\t\tPlease type " +commandText('ls')+" or " +commandText('help')+ " for a list of commands.  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t |\n"+
      "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t     |\n"+
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
    this.echo("|  " + commandText("GitHub") + ":       http://naver.com");
    this.echo("|  " + commandText("LinkedIn") + ":     http://naver.com");
    this.echo("|  " + commandText("Twitter") + ":      http://naver.com");
    this.echo();
  },
  github: function(){
    this.echo();
    this.echo("|  http://naver.com");
    this.echo();
  },

  facebook: function(){
    this.echo();
    this.echo("|  http://naver.com");
    this.echo();
  },

  linkedin: function(){
    this.echo();
    this.echo("|  http://naver.com");
    this.echo();
  },

  twitter: function(){
    this.echo();
    this.echo("|  http://naver.com");
    this.echo();
  },
  exp: function(){
    this.exec('work');
  },
  works: function(){
    this.exec('work');
  },
  work: function(){
    this.echo();
    this.echo("|   " + commandText('WORK'));
    /*
    this.echo("|  " + commandText('Software Engineering intern') + "                             at " + commandText("Codigm") + "\n|  Sept 2015 - Present");
    this.echo("|    Assist development of Goorm Cloud IDE (http://goorm.io), \n|    mainly built with Node.js on top of Amazon Web Services, \n|    improving outdated codes through code review and building new features.");
    this.echo("|    • Build automated bug reporting system for front-end using nightwatch.js.");
    this.echo("|    • Build test cases for user management, locale and language support, \n|      and file management system.");
    this.echo("|    • Develop Scala language plugin for Goorm IDE.");
    this.echo("|    • Improve python flask framework plugin and develop a starter boilerplate.");
    this.echo("|");
    this.echo("|  " + commandText('Alternative Military Service') + "            at " + commandText("Suji Municipal Office") + "\n|  Aug 2013 - Aug 2015");
    this.echo("|    • Received Basic Military Training and staged civil defense drills \n|      to prepare for any possible disaster.");
    this.echo("|");
    this.echo("|  " + commandText('Summer Internship') + "                                       at " + commandText("MtekVision") + "\n|  Jun 2013 - Aug 2013");
    this.echo("|    • Assisted develop an internal file management system using Microsoft SharePoint.");
    this.echo("|    • Created documentations, make a PowerPoint, and host a seminar for use of SharePoint.");
    this.echo("|    • Conducted technical research on the semiconductor companies focusing on \n|      web-based marketing strategies of other semiconductor companies.");
    */
    this.echo();
  },
  whoami: function(){
    this.exec('about');
  },
  about: function(){
    this.echo();
    this.echo("|  Name:         " + commandText('ManHyuk Han'));
    this.echo("|");
    this.echo("|  Summary:      I am a Backend Web Developer (primarily " + commandText('Node.js') + ", " + commandText('Ruby') + ")s");
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
    /*
    this.echo("|  " + commandText('VV') + "   http://nektime.herokuapp.com       Interview practicing web game            \n|    // Backend Development");
    this.echo("|  " + commandText('Pook') + "      http://pook.run                    Parody website for violent protestors    \n|    // Full Stack Development ");
    this.echo("|  " + commandText('Houston') + "                                      Arduino & Node.js Rocket                 \n|    // Embedded & Full Stack Development");
    */
    this.echo();
  },
  skill: function(){
    this.exec('skills');
  },
  skills: function(){
    this.echo("|");
    // this.echo("|  " + commandText('Web Back-End'));
    // this.echo("|");
    this.echo("|  [[g;#B2D100;]Web Back-End] ");
    this.echo("|  " + commandText('Node.js w/ Express') + "     ##[[g;#5BD100;]@@@@]                                               ##");
    this.echo("|  " + commandText('Ruby w/ Rails') + "          ##[[g;#B2D100;]@@@@]                                               ##");
    this.echo("|");
    // this.echo("|  " + commandText("Web Front-End"));
    // this.echo("|");
    this.echo("|  [[g;#B2D100;]Web Front-End] ");
    this.echo("|  " + commandText('Javascript') + "             ##[[g;#5BD100;]@@@@]                                               ##");
    this.echo("|  " + commandText('CSS / SASS') + "             ##[[g;#B2D100;]@@]                                                 ##");
    this.echo("|  " + commandText('HTML5') + "                  ##[[g;#B2D100;]@@]                                                 ##");
    this.echo("|");
    // this.echo("|  " + commandText("Database"));
    // this.echo("|");
    this.echo("|  [[g;#B2D100;]Database] ");
    this.echo("|  " + commandText('MySQL') + "                  ##[[g;#B2D100;]@@]                                                 ##");
    this.echo("|  " + commandText('MongoDB') + "                ##[[g;#D1B900;]@@]                                                 ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Native Mobile / Game Dev] ");
    // this.echo("|  " + commandText("Native Mobile / Game Dev"));
    // this.echo("|");
    this.echo("|  " + commandText('Unity (C#)') + "             ##[[g;#D1B900;]@@]                                                 ##");
    this.echo("|  " + commandText('Android') + "                ##[[g;#D13F00;]@@@@]                                               ##");
    this.echo("|  " + commandText('IOS') + "                    ##[[g;#D13F00;]@]                                                  ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]ETC] ");
    // this.echo("|");
    this.echo("|  " + commandText('Ubuntu Linux') + "           ##[[g;#B2D100;]@@]                                                 ##");
    this.echo("|  " + commandText('Arduino') + "                ##[[g;#D1B900;]@@]                                                 ##");
    this.echo("|  " + commandText('Heroku') + "                 ##[[g;#D1B900;]@@]                                                 ##");
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
    this.echo("|  Site built by " + commandText('ManHyuk Han'));
    this.echo("|  Using " + commandText('Jquery Terminal Emulator') + " by " + commandText('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
    this.echo();
  },
  award: function(){
    this.exec('awards');
  },

  awards: function(){
    this.echo();
    this.echo("|  " + commandText('Top 10 in WearHacks Hackathon') + "                                Oct  2015  \n|   | W                     project: http://a.com");
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
  /*
  mobile: function(){
    that.clear();
    that.echo("[[g;#5BD100;]KEON KIM]");
    that.echo("A Back-End Programmer");
    that.echo("Machine Learning, NLP, Game, Web");
    that.echo();
    that.echo("[[g;#D13F00;]EXPERIENCE]");
    that.echo("[[g;#B2D100;]Intern at Codigm 2015]");
    that.echo("[[g;#B2D100;]Alternative Military 2013-2015]");
    that.echo("[[g;#B2D100;]Intern at MtekVision 2013]");
    that.echo();
    that.echo("[[g;#D13F00;]EDUCATION]");
    that.echo("B.A in CS | New York University");
    that.echo();
    that.echo("[[g;#B2D100;]Blog]");
    that.echo("http://blog.keon.io");
    that.echo("[[g;#B2D100;]GitHub]");
    that.echo("http://github.com/keonkim");
    that.echo("[[g;#B2D100;]Email]");
    that.echo("keon.kim@nyu.edu");
    that.echo();
    that.echo("[[g;#D13F00;]Resume]");
    that.echo("http://keon.io/KeonKim.pdf");
    that.echo();
    that.echo("Access with desktop for more!");
    that.echo();
  },
  */
}

jQuery(document).ready(function($) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      //window.location.href = "http://keon.io/resume";
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
