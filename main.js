function main() 
{
    console.log("nicks-cors-test");
    $.ajax
    ({
        url: "http://localhost:8080/api/v1/process/597422a4-289b-4402-b475-6038184c215b/status",
        success: function(data) 
        {
            console.log(data);
        }
    });
}
