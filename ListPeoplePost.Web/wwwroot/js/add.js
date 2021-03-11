$(() => {
    let num = 1;

    $("#add-rows").on('click', function () {
        $("#ppl-rows").append(`<div class="row person-row" style='margin-bottom:10px;'>
                <div class="col-md-3">
                    <input class="form-control" type="text" name="people[${num}].firstname" placeholder="First Name"/>
                </div>
                <div class="col-md-3">
                    <input class="form-control" type="text" name="people[${num}].lastname" placeholder="Last Name"/>
                </div>
                <div class="col-md-3">
                    <input class="form-control" type="text" name="people[${num}].age" placeholder="Age"/>
                </div>
                <div class="col-md-3">
                    <button type="button" class="btn btn-danger delete">Delete</button>
                </div>
            </div>`);
        num++;
    });

    $("#ppl-rows").on('click', '.delete', function() {
        const button = $(this);
        const row = button.closest('.row');
        row.remove();


        const personRows = $(".person-row");
        let counter = 0;
        personRows.each(function() {
            const currentRow = $(this);
            const inputs = currentRow.find('input');
            inputs.each(function() {
                const currentInput = $(this);
                const nameAttr = currentInput.attr('name');
                const indexOfDot = nameAttr.indexOf('.');
                const sub = nameAttr.substring(indexOfDot + 1);
                currentInput.attr('name', `people[${counter}].${sub}`);
            });
            counter++;
        });
        num = counter;
    });

    //$("#google-link").on('click', function (e) {
    //    e.preventDefault();
    //    window.location = 'https://lakewoodprogramming.com';
    //});
});