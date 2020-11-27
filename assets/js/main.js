
jQuery(document).ready(function($) {

    $.getJSON('assets/json/projects.json', function(){}).done(function(data){
        $.each(data, function(i, item) {
            if (i == 'latest'){
                if(item && item[0]){
                    var latestproj = item[0]
                    $("#latestproj").append(
                        '<div class="item featured text-center">'+
                            '<div class="featured-image">'+
                                '<a href='+latestproj.githublink+' target="_blank">'+
                                '<img class="img-fluid project-image rounded shadow-sm" src='+latestproj.imgsrc+' alt="c_nmc" />'+
                                '</a>'+
                            '</div>'+
                            '<h3 class="title mb-3"><a href='+latestproj.githublink+' target="_blank">'+latestproj.title+'</a></h3>'+
                            '<div class="desc text-left">'+   
                                '<p>'+latestproj.description+'</p>'+
                            '</div>'+  
                        '</div>'
                    );
                }
            }else{
                $.each(item, function(key,it){
                    $("#othersproj").append(
                        '<a href='+it.githublink+' target="_blank">'+
                            '<div class="item">'+
                                '<img class="img-fluid project-image rounded shadow-sm" src='+it.imgsrc+' alt="project name" />'+
                                '<div class="desc col-12">'+
                                    '<h3 class="title">'+it.title+'</h3>'+
                                    '<p class="projdesc">'+it.description+'</p>'+
                                '</div>'+                  
                            '</div>'+
                        '</a>'
                    );
                })
            }
        });
    })

});