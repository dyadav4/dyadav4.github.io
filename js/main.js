var projectsdata = null
jQuery(document).ready(function($) {
    console.log('document loaded')
    $(".scroll").click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 40},1000);
    });

    $.getJSON('json/projects.json', function(){}).done(function(data){
        projectsdata = data
        getProjectsData("mobile")
    })
});

function getProjectsData(type){
    switch(type) {
        case 'mobile':
            if(projectsdata && projectsdata.mobile_projects){
                getProjectsUI(projectsdata.mobile_projects)
            }
            break
        case 'web':
            if(projectsdata && projectsdata.web_projects){
                getProjectsUI(projectsdata.web_projects)
            }
            break
        case 'machine':
                if(projectsdata && projectsdata.machine_projects){
                    getProjectsUI(projectsdata.machine_projects)
                }
                break
        default:
            alert("Nothing found")
    }
}

function getProjectsUI(data) {
    $(".portfolio__items-container").empty()
    $.each(data, function(i, item) {
        if(item){
            $(".portfolio__items-container").append(
                '<div class="portfolio__item">' +
				  '<a target="_blank" href='+item.url+' style="display: flex;">'+
					'<div style="width: 50%;padding: 10px;text-align: center;">'+
						'<img src='+item.imgsrc+' class="portfolio__item__thumbnail" alt="burnalong" style="padding: 10px;">'+
					'</div>'+
					'<div style="padding: 10px;width: 50%;">'+
						'<div>'+
							'<h1 class="portfolio__item__info" style="text-align: left; font-size: 3rem; font-weight: bold;">'+item.title+'</h1>' +
							'<p style="font-size: 1.6rem;">'+item.description+'</p>' +
						'</div>' +
						'<div style="position: absolute;bottom: 0;right: 0;margin: 10px;">' +
                            '<p class="tools'+i+'" style="font-size: 1.6rem;"></p>' +
						'</div>' +
					'</div>' +
				  '</a>' +
				'</div>'
            ).fadeIn('slow');
            var tools = ""
            for(var j = 0;j<item.tools.length;j++){
                if(j == 0) {
                    tools += "  |   " + item.tools[j] + "  |   "
                }else{
                    tools += item.tools[j] + "  |   "
                }
            }
            $(".tools"+i).text(tools)            
        }
    });
}