function generate_filter_menu() {
    Vue.component('filter_menu_vue', {
        template: `
            <div class="outer-container">
            <div class="over-inner-header">
                <div class="search-for-latest">Latest Stock Market News</div>
                <button class="cancel-button"><i class="fas fa-times"></i></button>
            </div>
            <div class="inner-container">
                <form class="search-container">
                    <input type="text" class="input-search" placeholder="Search ...">
                    <button type="button" class="lens-container">
                        <div class="fa fa-search"></div>
                    </button>
                </form>
            <div class="galery-container">
                <div class="scrolly">
                    <button id="left"><i class="fas fa-chevron-left"></i></button>
                    <button id="right"><i class="fas fa-chevron-right"></i></button>
                    <ul class="carouselPre">
                        <li class="itemsC">
                            <div class="header-container">
                                <h1 class="leftTxtDet">Communication Services</h1>
                            </div>
                            <div class="bgImg" data-for-tab="2">
                                <div class="selected_cbs">Selected: 0</div>
                                <img src="../@resources/sector_pictures/communication_services.svg" alt="image">
                                <i class="fas fa-check-circle" style="display:none"></i>
                            </div>
                        </li>
                        <li class="itemsC">
                            <div class="header-container">
                                <h1 class="leftTxtDet">Consumer Discretionary</h1>
                            </div>
                            <div class="bgImg" data-for-tab="3">
                                <div class="selected_cbs">Selected: 0</div>
                                <img src="../@resources/sector_pictures/consumer_discretionary.png" alt="image">
                                <i class="fas fa-check-circle" style="display:none"></i>
                            </div>
                        </li>
                        <li class="itemsC">
                            <div class="header-container">
                                <h1 class="leftTxtDet">Consumer Staples</h1>
                            </div>
                            <div class="bgImg" data-for-tab="4">
                                <div class="selected_cbs">Selected: 0</div>
                                <img src="../@resources/sector_pictures/consumer_staples.svg" alt="image">
                                <i class="fas fa-check-circle" style="display:none"></i>
                            </div>
                        </li>
                        <li class="itemsC">
                            <div class="header-container">
                                <h1 class="leftTxtDet">Energy</h1>
                            </div>
                            <div class="bgImg" data-for-tab="5">
                                <div class="selected_cbs">Selected: 0</div>
                                <img src="../@resources/sector_pictures/energy.png" alt="image">
                                <i class="fas fa-check-circle" style="display:none"></i>
                            </div>
                        </li>
                        <li class="itemsC">
                            <div class="header-container">
                                <h1 class="leftTxtDet">Financials</h1>
                            </div>
                            <div class="bgImg" data-for-tab="6">
                                <div class="selected_cbs">Selected: 0</div>
                                <img src="../@resources/sector_pictures/financials.svg" alt="image">
                                <i class="fas fa-check-circle" style="display:none"></i>
                            </div>
                        </li>
                        <li class="itemsC">
                            <div class="header-container">
                                <h1 class="leftTxtDet">Healthcare</h1>
                            </div>
                            <div class="bgImg" data-for-tab="7">
                                <div class="selected_cbs">Selected: 0</div> 
                                <img src="../@resources/sector_pictures/healthcare.png" alt="image">
                                <i class="fas fa-check-circle" style="display:none"></i>
                            </div>
                        </li>
                        <li class="itemsC">
                            <div class="header-container">
                                <h1 class="leftTxtDet">Industrials</h1>
                            </div>
                            <div class="bgImg" data-for-tab="8">
                                <div class="selected_cbs">Selected: 0</div>
                                <img src="../@resources/sector_pictures/industrials.png" alt="image">
                                <i class="fas fa-check-circle" style="display:none"></i>
                            </div>
                        </li>
                        <li class="itemsC">
                            <div class="header-container">
                                <h1 class="leftTxtDet">Information Technology</h1>
                            </div>
                            <div class="bgImg" data-for-tab="9">
                                <div class="selected_cbs">Selected: 0</div>                            
                                <img src="../@resources/sector_pictures/technology.png" alt="image">
                                <i class="fas fa-check-circle" style="display:none"></i>
                            </div>
                        </li>
                        <li class="itemsC">
                            <div class="header-container">
                                <h1 class="leftTxtDet">Materials</h1>
                            </div>
                            <div class="bgImg" data-for-tab="10">
                                <div class="selected_cbs">Selected: 0</div>
                                <img src="../@resources/sector_pictures/materials.png" alt="image">
                                <i class="fas fa-check-circle" style="display:none"></i>
                            </div>
                        </li>
                        <li class="itemsC">
                            <div class="header-container">
                                <h1 class="leftTxtDet">Real Estate</h1>
                            </div>
                            <div class="bgImg" data-for-tab="11">
                                <div class="selected_cbs">Selected: 0</div>
                                <img src="../@resources/sector_pictures/real_estate.svg" alt="image">
                                <i class="fas fa-check-circle" style="display:none"></i>
                            </div>
                        </li>
                        <li class="itemsC">
                            <div class="header-container">
                                <h1 class="leftTxtDet">Utilities</h1>
                            </div>
                            <div class="bgImg" data-for-tab="12">
                                <div class="selected_cbs">Selected: 0</div>
                                <img src="../@resources/sector_pictures/utilities.png" alt="image">
                                <i class="fas fa-check-circle" style="display:none"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div class="search-container-below">
                <button class="search-button">Search News</button>
            </div>
            <div class="content">
                <ul class="ks-cboxtags"></ul>
            </div>
        </div>`
    });

    new Vue({
        el: '#filter_menu_vue'
    });





}

//Data ----------------------------------------------------------------------------------------------------------------

//Custom User Input Searches
const user_input_array = [];

//Stock Names Data
const communication_services = ['AT&T', 'Charter Communications', 'Comcast', 'Libery Broadband Corporation',
    'T-Mobile US', 'Twilio', 'Verizon', 'ViacomCBS', 'Vodafone Group', 'Zoom Video Communications'
];
const consumer_discretionary = ['Amazon', 'Etsy', 'Home Depot', 'Lowe\'s Companies', 'McDonald\'s Corporation',
    'Nike', 'Starbucks', 'Target', 'Ulta Beauty', 'Yum! Brands'
];
const consumer_staples = ['Anheuser-Busch InBev', 'Coca-Cola', 'Constellation Brands', 'Diageo',
    'Mondelez International', 'Pepsico', 'Phillip Morris', 'Procter & Gamble', 'Unilever', 'Wal-Mart'
];
const energy = ['BP', 'Chevron', 'ConcoPhillips', 'Enbridge', 'Equinor', 'Exxon Mobile', 'Kinder Morgan',
    'Petro China', 'Petrobas', 'Royal Dutch Shell'
];
const financials = ['Bank of America', 'BlackRock', 'Citigroup', 'Goldman Sachs', 'JPMorgan Chase', 'Mastercard',
    'Morgan Stanley', 'PayPal', 'Visa', 'Wells Fargo'
];
const healthcare = ['Abbot Laboratories', 'AbbVie', 'Amgen', 'AstraZeneca', 'Eli Lilly & Company',
    'Johnson & Johnson', 'Novartis', 'Pfizer', 'Thermo Fisher Scientific', 'UnitedHealth Group'
];
const industrials = ['3M Company', 'Caterpillar', 'FedEx', 'General Electric', 'Honeywell International',
    'Lockheed Martin', 'Raytheon Technologies', 'The Boeing Company', 'Union Pacific', 'United Parcel Services'
];
const information_technology = ['Adobe', 'Apple', 'Cisco', 'IBM', 'Intel', 'Microsoft', 'Nvidia', 'Oracle',
    'Salesforce.com', 'SAP'
];
const materials = ['ArcelorMittal', 'Barrick Gold', 'BHP', 'Dow', 'DuPont', 'Ecolab', 'Linde',
    'Newmont Corporation', 'Rio Tinto Group', 'Vale S.A.'
];
const real_estate = ['American Tower Corporation', 'Crown Castle International', 'Digital Realty Trust', 'Equinix',
    'Equity Residential', 'KE Holdings', 'Public Storage', 'Prologis', 'Simon Property Group', 'Welltower'
];
const utilities = ['American Water Works', 'Dominion', 'Duke Energy', 'Exelon Corporation', 'National Grid',
    'NextEra Energy', 'Sempra Energy', 'The Southern Company', 'WEC Energy Group', 'Xcel Energy'
];

var stocks_array = [user_input_array, communication_services, consumer_discretionary, consumer_staples, energy,
    financials,
    healthcare, industrials, information_technology, materials, real_estate, utilities
];
var stocks_array_names = ["Custom Search", "Communication Services", "Consumer Discretionary", "Consumer Staples",
    "Energy",
    "Financials", "Healthcare", "Industrials", "Information Technology", "Materials", "Real Estate", "Utilities"
];


//----------------------------------------------------------------------------------------------------------------

//Checkboxes
var ks_cboxtags = document.querySelector('.ks-cboxtags');
var checkExist = setInterval(function () {
    if (ks_cboxtags) {


        //Search Function ---------------------------------------------------------------

        var search_btn = document.getElementsByClassName("search-button")[0];
        if (search_btn) {
            search_btn.addEventListener("click", function () {
                search();
            });
        }

        function search() {
            var all_checkboxes = ks_cboxtags.getElementsByTagName("INPUT");
            if (all_checkboxes) {
                var all_checkboxes_checked = [];
                for (var i = 0; i < all_checkboxes.length; i++) {
                    if (all_checkboxes[i].checked == true) {
                        all_checkboxes_checked.push(all_checkboxes[i]);
                    }
                }

                var checkbox_values = [];
                if (all_checkboxes_checked.length != 0) {
                    for (var i = 0; i < all_checkboxes_checked.length; i++) {
                        checkbox_values.push(all_checkboxes_checked[i].value);
                    }
                }

                if (checkbox_values) {
                    var unique_checkboxes = checkbox_values.filter(function (item, pos) {
                        return checkbox_values.indexOf(item) == pos;
                    });
                    checkbox_values = unique_checkboxes;

                    localStorage.setItem("checkboxes", JSON.stringify(checkbox_values));
                }

                location.reload();


            }
        }

        //-------------------------------------------------------------------------------------

        //check checkboxes from local Storage--------------------------------------------------
        function loadCBSFromLocalStorage() {
            var checkboxes_ls = []
            try {
                checkboxes_ls = JSON.parse(localStorage.getItem("checkboxes"));
            } catch (error) {
                console.log("ERROR in generate_filter_menu.js at function loadCBSFromLocalStorage(): line 256 (JSON Parse Error)");
            }

            if (checkboxes_ls != null) {
                if (checkboxes_ls.length != 0) {
                    return checkboxes_ls;
                }
            }


        }

        function checkCBS() {
            var checkboxes_ls = loadCBSFromLocalStorage();
            var custom_checkboxes = [];
            var all_checkboxes = ks_cboxtags.getElementsByTagName("INPUT");
            var cb_found = false;
            if (all_checkboxes && checkboxes_ls) {
                var unique_checkboxes_ls = checkboxes_ls.filter(function (item, pos) {
                    return checkboxes_ls.indexOf(item) == pos;
                });
                checkboxes_ls = unique_checkboxes_ls;
                for (let i = 0; i < checkboxes_ls.length; i++) {

                    for (var j = 0; j < all_checkboxes.length; j++) {
                        if (String(checkboxes_ls[i]) == String(all_checkboxes[j].value)) {
                            all_checkboxes[j].checked = true;
                            cb_found = true;
                            break;
                        }
                    }

                    if (!cb_found) {
                        custom_checkboxes.push(checkboxes_ls[i]);
                    }

                    cb_found = false;

                }
                countCheckedCBS();
                createCustomSearchCBSfromLS(custom_checkboxes);

            }


        }

        function countCheckedCBS() {
            var stock_classes = document.getElementsByClassName("itemsC");
            var holders = document.getElementsByClassName("holder");

            for (let i = 0; i < stock_classes.length; i++) {
                var selectedCbs = 0;
                var holder = document.getElementById("holder_" + (i + 1));
                var checkboxes = holder.getElementsByTagName("INPUT");

                for (let j = 0; j < checkboxes.length; j++) {
                    if (checkboxes[j].checked) {
                        selectedCbs += 1;
                    }
                }
                var selected_counter = stock_classes[i].getElementsByClassName("selected_cbs")[0];
                selected_counter.innerHTML = "Selected: " + selectedCbs;
            }

        }

        function createCustomSearchCBSfromLS(array = null) {
            if (array != null) {
                if (array.length != 0) {
                    for (let i = 0; i < array.length; i++) {
                        addInput(String(array[i]));
                    }
                }
            }
        }

        //-------------------------------------------------------------------------------------

        function scroll_down() {
            var settings_menu = document.getElementsByClassName("outer-container")[0];
            if (settings_menu) {
                //animate scroll bar
                $(settings_menu).animate({
                    scrollTop: settings_menu.scrollHeight,
                }, 2500, function () {});
            }

            $(window).bind('mousewheel DOMMouseScroll', function (event) {
                if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                    $(settings_menu).stop();
                } else {
                    $(settings_menu).stop();
                }
            });
        }

        function scroll_up() {
            var settings_menu = document.getElementsByClassName("outer-container")[0];
            if (settings_menu) {
                //animate scroll bar
                $(settings_menu).animate({
                    scrollTop: 0,
                }, 500, function () {});
            }

            $(window).bind('mousewheel DOMMouseScroll', function (event) {
                if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                    $(settings_menu).stop();
                } else {
                    $(settings_menu).stop();
                }
            });
        }

        function show_Checkboxes(id) {
            var checkbox_holder = document.querySelector('#holder_' + (id));
            checkbox_holder.style.display = "block";
            let item_header = document.createElement('h2');
            item_header.classList.add('item_header_' + id);
            item_header.innerHTML = stocks_array_names[id];
            ks_cboxtags.insertBefore(item_header, checkbox_holder);

            scroll_down();
        }

        function hide_Checkboxes(id) {
            var checkbox_holder = document.getElementById("holder_" + id);
            checkbox_holder.style.display = "none";
            let item_header = document.querySelector('.item_header_' + id);
            item_header.parentNode.removeChild(item_header);
        }


        function generate_Checkboxes() {
            var ks_cboxtags = document.querySelector('.ks-cboxtags');
            for (let y = 0; y < stocks_array.length; y++) {
                let holder = document.createElement('ul');
                holder.id = "holder_" + y;
                holder.style.display = "none";
                holder.classList.add("holder");
                for (let x = 0; x < stocks_array[y].length; x++) {
                    let item = document.createElement('li');
                    let input_element = document.createElement('input');
                    input_element.setAttribute('type', 'checkbox');
                    input_element.setAttribute('id', stocks_array_names[y] + '_' + x);
                    input_element.setAttribute('value', stocks_array[y][x]);
                    let label_element = document.createElement('label');
                    label_element.setAttribute('for', stocks_array_names[y] + '_' + x);
                    item.appendChild(input_element);
                    item.appendChild(label_element);
                    label_element.innerHTML = stocks_array[y][x];
                    holder.appendChild(item);
                }
                ks_cboxtags.appendChild(holder);
            }
        }


        //User Input
        function addInput(customInput = null) {
            var user_input = document.querySelector('.input-search');
            var user_input_value = null;
            if (customInput != null) {
                user_input_value = customInput;
            } else {
                if (user_input.value != '' && user_input.value != null) {
                    user_input_value = user_input.value;
                } else {
                    window.alert("Search can't be empty! Please insert a stock name.")
                }
            }

            if (user_input_value != '' && user_input_value != null) {
                user_input_array.push(user_input_value);
                //Checkboxes
                let item = document.createElement('li');
                let input_element = document.createElement('input');
                input_element.setAttribute('type', 'checkbox');
                input_element.setAttribute('id', 'stock_input_' + user_input_array.length);
                input_element.setAttribute('value', user_input_value);
                input_element.checked = true;
                let label_element = document.createElement('label');
                label_element.setAttribute('for', 'stock_input_' + user_input_array.length);
                item.appendChild(input_element);
                item.appendChild(label_element);
                label_element.innerHTML = user_input_value;
                var holder_0 = document.querySelector('#holder_0');
                holder_0.appendChild(item);
                user_input.value = '';
                var checkbox_holder = holder_0;
                if (window.getComputedStyle(checkbox_holder).display == 'none') {
                    checkbox_holder.style.display = 'block';
                    let item_header = document.createElement('h2');
                    item_header.innerHTML = stocks_array_names[0];
                    ks_cboxtags.insertBefore(item_header, checkbox_holder);
                    holder_0.style.display = 'block';
                    if (window.getComputedStyle(content).visibility != 'visible') {
                        content.style.visibility = 'visible';
                        content.style.opacity = '1';
                    }
                }
                scroll_down();
            }

        }

        // Checkmark function
        const selected_category = document.querySelectorAll('.bgImg');
        var content = document.querySelector('.content');
        var check_array = [];
        for (let i = 0; i < selected_category.length; i++) {
            selected_category[i].addEventListener('click', () => {
                let checkmark = selected_category[i].lastElementChild;
                var tabNumber = selected_category[i].dataset.forTab;
                var all_checkbox_holders = document.getElementsByClassName("holder");
                var checkbox_holder = document.getElementById("holder_" + (tabNumber - 1));
                if (window.getComputedStyle(checkbox_holder).display == 'none') {
                    show_Checkboxes(tabNumber - 1);
                } else {
                    hide_Checkboxes(tabNumber - 1);
                }
                if (window.getComputedStyle(checkmark).display == 'block') {
                    checkmark.style.display = 'none';
                } else {
                    checkmark.style.display = 'block';
                    content.style.visibility = 'visible';
                    content.style.opacity = '1';
                }
                var is_visible = false;
                for (let i = 0; i < all_checkbox_holders.length; i++) {
                    if (all_checkbox_holders[i].style.display == 'block') {
                        is_visible = true;
                        break;
                    }
                }
                if (is_visible == false) {
                    //content.style.visibility = 'hidden';
                    scroll_up();
                    content.style.opacity = '0';

                }
            });
        }

        //
        const close_btn = document.getElementsByClassName("cancel-button")[0];
        if (close_btn) {
            close_btn.addEventListener("click", closeFilterMenu);
        }


        //Galery functions
        let outtester = document.getElementsByClassName('scrolly');
        for (var i = 0; i < outtester.length; i++) {
            scrollification('scrolly', setyup = {
                i: i,
                scrollCont: '.carouselPre',
                itemsScroll: '.itemsC',
                customButtons: true,
                butLeft: '#left',
                butRight: '#right'
            })
        }

        function scrollification(mainConter, setyup = {
            i,
            scrollcont,
            itemsScroll,
            customButtons,
            butLeft,
            butRight
        }) {
            if (setyup.i == null) {
                out = document.getElementsByClassName(mainConter)[0];
            } else {
                out = document.getElementsByClassName(mainConter)[setyup.i];
            }

            if (setyup.customButtons == true) {
                l = out.querySelector(setyup.butLeft);
                r = out.querySelector(setyup.butRight);
            }

            var out,
                a = out.querySelector(setyup.scrollCont),
                l, r,
                q = out.querySelectorAll(setyup.itemsScroll);

            $(l).click(function () {
                getBack();
            });

            $(r).click(function () {
                getNext();
            });

            function getNext() {
                for (var i = 0; i < q.length; i++) {
                    if (q[i].getBoundingClientRect().left <= a.getBoundingClientRect().left + 50) {
                        var index = q[i].offsetWidth;
                        $(a).scrollLeft($(a).scrollLeft() + index);
                    }
                }
            }

            function getBack() {
                for (var i = 1; i < q.length; i++) {
                    if (q[i].getBoundingClientRect().left < a.getBoundingClientRect().left + 50) {
                        var index = q[i - 1].offsetWidth;
                        $(a).scrollLeft($(a).scrollLeft() - index);
                    }
                }
            }
        }


        //Main Section ---------------------------------------------------------------------------------
        generate_Checkboxes();
        checkCBS();

        var all_checkboxes = ks_cboxtags.getElementsByTagName("INPUT");
        for (let i = 0; i < all_checkboxes.length; i++) {
            all_checkboxes[i].addEventListener("click", function () {
                countCheckedCBS();
            });
        }

        var search_button = document.querySelector('.lens-container');
        search_button.addEventListener('click', function () {
            addInput();
        });
        //----------------------------------------------------------------------------------------------


        console.log("finished filter menu");
        clearInterval(checkExist);
    } else {
        ks_cboxtags = document.querySelector('.ks-cboxtags');
    }
}, 100); // check every 100ms


$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
});