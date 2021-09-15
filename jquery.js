let data = [];

let editdata = ` 
<button type="button" margin-left: 217px;" class="btn btn-primary btn_editdata_config" data-toggle="modal" data-target="#myModal"">
    Edit Content
</button>
<div class="modal fade" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Edit data</h4>
                <button type="button" class="close" data-dismiss="modal">×</button>
            </div>
            <!-- Modal body -->
            <div class="modal-body">
            <table>
            <tr>
                <td><label for="">Comment edit </label></td>
                <td><input type="text" class="ipn_name1"></td>
            </tr>
        </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn_update_edit" data-dismiss="modal">Update</button>
            </div>
        </div>
    </div>
</div>`;

let deletedata = `<button type="button" class="btn btn-primary btn_delete_data">Delete Data</button>`;
let dau3cham = `<a class ="btn___" >...</a>`;

function render() {
    $("#list").html("");
    data.map((ele, index) => {
        let div = `  <tr>
        <td>${ele}</td>
        <td>` +
            dau3cham + editdata + deletedata + `
             </td></tr> `;

        $("#list").append(div);

        $($(".btn_editdata_config")[index]).hide();
        $($(".btn_delete_data")[index]).hide();

        $($(".btn___")[index]).on("click", () => {
            $($(".btn_editdata_config")[index]).show();
            $($(".btn_delete_data")[index]).show();
            $($(".btn___")[index]).hide();
        })

        $($(".btn_delete_data")[index]).on("click", () => {
            data.splice(index, 1);
            render();
        });

        $($(".btn_editdata_config")[index]).on("click", () => {
            $(".ipn_name1").val(ele);
            $(".btn_update_edit").off("click");
            $(".btn_update_edit").on("click", () => {
                let newdata = $(".ipn_name1").val();
                data.splice(index, 1, newdata);
                render();
            });
        });
    });
}


function comment() {
    let newdata = $(".Conten_Comment").val();
    data.push(newdata);
    render();
}