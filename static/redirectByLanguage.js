function redirectByLanguage(){
	try{
		if(localStorage.noRedirect){
			return;
		}

		var lang = window.navigator.userLanguage || window.navigator.language || "en";
		var isRuLang = lang.toLowerCase().indexOf("ru") >= 0;
		var currentUrl = window.location.href.toLowerCase();
		var isRuSite = currentUrl.indexOf("ru.quizexer.com") >= 0;
		if(isRuLang != isRuSite){
			var text = isRuLang ? "Перейти на русскую версию сайта (ru.quizexer.com)?" : "Redirect to english version (www.quizexer.com)?";
			if(confirm(text)){
				var sites = ["ru.quizexer.com","www.quizexer.com"];
				sites = isRuSite ? sites : [sites[1],sites[0]];
				window.location.href = currentUrl.replace(sites[0],sites[1]);
			}else{
				localStorage.noRedirect = 1;
			}
		}
	}catch(e){}
}

redirectByLanguage();
