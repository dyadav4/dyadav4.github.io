var projectsdata = null

jQuery(document).ready(function($) {
    console.log('document loaded')
    $(".scroll").click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 40},1000);
    });

    $.getJSON('json/projects.json', function(){}).done(function(data){
        if (data) {
            projectsdata = data
            getProjectsData("mobile_proj", "mobile")
        }
        
    })
});

function getProjectsData(id, type){
    switch(type) {
        case 'mobile':
            if(projectsdata && projectsdata.mobile_projects){
                var mobile_data = projectsdata.mobile_projects.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
                getProjectsUI(id, mobile_data)
            }
            break
        case 'web':
            if(projectsdata && projectsdata.web_projects){
                getProjectsUI(id, projectsdata.web_projects)
            }
            break
        case 'machine':
                if(projectsdata && projectsdata.machine_projects){
                    getProjectsUI(id, projectsdata.machine_projects)
                }
                break
        default:
            alert("Nothing found")
    }
}

function getProjectsUI(id, data) {
    if(data.length > 0){
        $(".projects_tab").removeClass( "active");
        $( "#"+id+" span" ).addClass( "active" );
        $(".portfolio__items-container .card-deck").empty()
        $.each(data, function(i, item) {
            if(item){
                $(".portfolio__items-container .card-deck").append(
                    '<a target="_blank" href='+item.url+'>'+
                        '<div class="card">'+
                            '<div class="card-title">'+
                            '<h3>'+item.title+'</h3>'+
                            '</div>'+
                            '<img class="card-img-top" src='+item.imgsrc+' alt='+item.title+'>'+
                            // '<div class="card-block">'+
                            //     '<h4 class="card-title">'+item.title+'</h4>'+
                            //     '<p class="card-text">'+item.description+'</p>'+
                            // '</div>'+
                            '<div class="card-footer">'+
                                '<small class="text-muted">'+item.tools+'</small>'+
                            '</div>'+
                        '</div>'+
                    '</a>'
                );          
            }
        });
    }
}