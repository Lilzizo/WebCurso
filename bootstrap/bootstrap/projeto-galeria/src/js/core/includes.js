import $ from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback){
    if(!loadHtmlSuccessCallbacks.includes(callback)){
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent){
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e){
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data){
                $(e).html(data)//data será o resultado obtido da chamada
                $(e).removeAttr('wm-include')
                
                loadHtmlSuccessCallbacks.forEach(callback => callback(data))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()