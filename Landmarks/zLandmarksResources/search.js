const files = [
    { name: "Anjo World and Snow World", image: "Landmarks/AdventureSites/AnjoWorldAndSnowWorld/AnjoWorldAndSnowWorld-03.jpg", path: "Landmarks/AdventureSites/AnjoWorldAndSnowWorld/AnjoWorldAndSnowWorld.htm"},
    { name: "Calauit Safari Park", image: "Landmarks/AdventureSites/CalauitSafariPark/CalauitSafariPark-03.jpg", path: "Landmarks/AdventureSites/CalauitSafariPark/CalauitSafariPark.htm"},
    { name: "Cebu Ocean Park", "image": "Landmarks/AdventureSites/CebuOceanPark/CebuOceanPark-03.jpg", path: "Landmarks/AdventureSites/CebuOceanPark/CebuOceanPark.htm" },
    { name: "Clark Aqua Planet", "image": "Landmarks/AdventureSites/ClarkAquaPlanet/ClarkAquaPlanet-03.jpg", path: "Landmarks/AdventureSites/ClarkAquaPlanet/ClarkAquaPlanet.htm" },
    { name: "Clark Safari and Adventure Park", "image": "Landmarks/AdventureSites/ClarkSafariAndAdventurePark/ClarkSafariAndAdventurePark-03.jpg", path: "Landmarks/AdventureSites/ClarkSafariAndAdventurePark/ClarkSafariAndAdventurePark.htm" },
    { name: "Dahilayan Adventure Park", "image": "Landmarks/AdventureSites/DahilayanAdventurePark/DahilayanAdventurePark-03.jpg", path: "Landmarks/AdventureSites/DahilayanAdventurePark/DahilayanAdventurePark.htm" },
    { name: "Danao Adventure Park", "image": "Landmarks/AdventureSites/DanaoAdventurePark/DanaoAdventurePark-03.jpg", path: "Landmarks/AdventureSites/DanaoAdventurePark/DanaoAdventurePark.htm" },
    { name: "Dinosaurs Island", "image": "Landmarks/AdventureSites/DinosaursIsland/DinosaursIsland-03.jpg", path: "Landmarks/AdventureSites/DinosaursIsland/DinosaursIsland.htm" },
    { name: "Enchanted Kingdom", "image": "Landmarks/AdventureSites/EnchantedKingdom/EnchantedKingdom-03.jpg", path: "Landmarks/AdventureSites/EnchantedKingdom/EnchantedKingdom.htm" },
    { name: "Glorious Fantasyland", "image": "Landmarks/AdventureSites/GloriousFantasyland/GloriousFantasyland-03.jpg", path: "Landmarks/AdventureSites/GloriousFantasyland/GloriousFantasyland.htm" },
    { name: "Inflatable Island", "image": "Landmarks/AdventureSites/InflatableIsland/InflatableIsland-03.jpg", path: "Landmarks/AdventureSites/InflatableIsland/InflatableIsland.htm" },
    { name: "JCastles Theme Park", "image": "Landmarks/AdventureSites/JCastlesThemePark/JCastlesThemePark-03.jpg", path: "Landmarks/AdventureSites/JCastlesThemePark/JCastlesThemePark.htm" },
    { name: "Magikland", "image": "Landmarks/AdventureSites/Magikland/Magikland-03.jpg", path: "Landmarks/AdventureSites/Magikland/Magikland.htm" },
    { name: "Manila Ocean Park", "image": "Landmarks/AdventureSites/ManilaOceanPark/ManilaOceanPark-03.jpg", path: "Landmarks/AdventureSites/ManilaOceanPark/ManilaOceanPark.htm" },
    { name: "Ocean Adventure", "image": "Landmarks/AdventureSites/OceanAdventure/OceanAdventure-03.jpg", path: "Landmarks/AdventureSites/OceanAdventure/OceanAdventure.htm" },
    { name: "Peoples Park in the Sky", "image": "Landmarks/AdventureSites/PeoplesParkInTheSky/PeopleParkInTheSky-03.jpg", path: "Landmarks/AdventureSites/PeoplesParkInTheSky/PeoplesParkInTheSky.htm" },
    { name: "Sky Ranch", "image": "Landmarks/AdventureSites/SkyRanch/SkyRanch-03.jpg", path: "Landmarks/AdventureSites/SkyRanch/SkyRanch.htm" },
    { name: "Sky Water Park", "image": "Landmarks/AdventureSites/SkyWaterPark/SkyWaterPark-03.jpg", path: "Landmarks/AdventureSites/SkyWaterPark/SkyWaterPark.htm" },
    { name: "Star City", "image": "Landmarks/AdventureSites/StarCity/StarCity-03.jpg", path: "Landmarks/AdventureSites/StarCity/StarCity.htm" },
    { name: "Zoobic Safari", "image": "Landmarks/AdventureSites/ZoobicSafari/ZoobicSafari-03.jpg", path: "Landmarks/AdventureSites/ZoobicSafari/ZoobicSafari.htm" },
    { name: "Alona Beach", "image": "Landmarks/Beaches/AlonaBeach/AlonaBeach-03.jpg", path: "Landmarks/Beaches/AlonaBeach/AlonaBeach.htm"},
    { name: "Anda Beach", "image": "Landmarks/Beaches/AndaBeach/AndaBeach-03.jpg", path: "Landmarks/Beaches/AndaBeach/AndaBeach.htm"},
    { name: "Anguib Beach", "image": "Landmarks/Beaches/AnguibBeach/AnguibBeach-03.jpg", path: "Landmarks/Beaches/AnguibBeach/AnguibBeach.htm"},
    { name: "Banol Beach", "image": "Landmarks/Beaches/BanolBeach/BanolBeach-03.jpg", path: "Landmarks/Beaches/BanolBeach/BanolBeach.htm"},
    { name: "Boracay", "image": "Landmarks/Beaches/Boracay/Boracay-03.jpg", path: "Landmarks/Beaches/Boracay/Boracay.htm"},
    { name: "Canibad Beach", "image": "Landmarks/Beaches/CanibadBeach/CanibadBeach-03.png", path: "Landmarks/Beaches/CanibadBeach/CanibadBeach.htm"},
    { name: "Dahican Beach", "image": "Landmarks/Beaches/DahicanBeach/DahicanBeach-03.jpg", path: "Landmarks/Beaches/DahicanBeach/DahicanBeach.htm"},
    { name: "Dakak Beach", "image": "Landmarks/Beaches/DakakBeach/DakakBeach-03.jpg", path: "Landmarks/Beaches/DakakBeach/DakakBeach.htm"},
    { name: "Dumaluan Beach", "image": "Landmarks/Beaches/DumaluanBeach/DumaluanBeach-03.jpg", path: "Landmarks/Beaches/DumaluanBeach/DumaluanBeach.htm"},
    { name: "El Nido", "image": "Landmarks/Beaches/ElNido/ElNido-03.jpg", path: "Landmarks/Beaches/ElNido/ElNido.htm"},
    { name: "Kalanggaman Island", "image": "Landmarks/Beaches/KalanggamanIsland/KalanggamanIsland-03.jpg", path: "Landmarks/Beaches/KalanggamanIsland/KalanggamanIsland.htm"},
    { name: "Kaputian Beach", "image": "Landmarks/Beaches/KaputianBeach/KaputianBeach-03.jpg", path: "Landmarks/Beaches/KaputianBeach/KaputianBeach.htm"},
    { name: "Long Beach", "image": "Landmarks/Beaches/LongBeach/LongBeach-03.jpg", path: "Landmarks/Beaches/LongBeach/LongBeach.htm"},
    { name: "Magpupungko Rock Pools", "image": "Landmarks/Beaches/MagpupungkoRockPools/MagpupungkongRockPools-03.jpg", path: "Landmarks/Beaches/MagpupungkoRockPools/MagpupungkoRockPools.htm"},
    { name: "Nagtabon Beach", "image": "Landmarks/Beaches/NagtabonBeach/NagtabonBeach-03.jpg", path: "Landmarks/Beaches/NagtabonBeach/NagtabonBeach.htm"},
    { name: "Paliton Beach", "image": "Landmarks/Beaches/PalitonBeach/Paliton Beach-03.jpg", path: "Landmarks/Beaches/PalitonBeach/PalitonBeach.htm"},
    { name: "Paradise Beach", "image": "Landmarks/Beaches/ParadiseBeach/ParadiseBeach-03.jpg", path: "Landmarks/Beaches/ParadiseBeach/ParadiseBeach.htm"},
    { name: "Patar Beach", "image": "Landmarks/Beaches/PatarBeach/PatarBeach-03.jpg", path: "Landmarks/Beaches/PatarBeach/PatarBeach.htm"},
    { name: "Saud Beach", "image": "Landmarks/Beaches/SaudBeach/SaudBeach-03.jpg", path: "Landmarks/Beaches/SaudBeach/SaudBeach.htm"},
    { name: "Subic Bay", "image": "Landmarks/Beaches/SubicBay/SubicBay-03.jpg", path: "Landmarks/Beaches/SubicBay/SubicBay.htm"},
    { name: "Banaue Rice Terraces", image: "Landmarks/HistoricalAndCulturalSites/BanaueRiceTerraces/BanaueRiceTerraces-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/BanaueRiceTerraces/BanaueRiceTerraces.htm"},
    { name: "Barasoain Church", image: "Landmarks/HistoricalAndCulturalSites/BarasoainChurch/BarasoainChurch-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/BarasoainChurch/BarasoainChurch.htm"},
    { name: "Basilica Del Santo Niño", image: "Landmarks/HistoricalAndCulturalSites/BasilicaDelSantoNiño/BasilicaDelSantoNiño-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/BasilicaDelSantoNiño/BasilicaDelSantoNiño.htm"},
    { name: "Binondo", image: "Landmarks/HistoricalAndCulturalSites/Binondo/Binondo-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/Binondo/Binondo.htm"},
    { name: "Cagsawa Ruins", image: "Landmarks/HistoricalAndCulturalSites/CagsawaRuins/CagsawaRuins-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/CagsawaRuins/CagsawaRuins.htm"},
    { name: "Calle Crisologo", image: "Landmarks/HistoricalAndCulturalSites/CalleCrisologo/CalleCrisologo-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/CalleCrisologo/CalleCrisologo.htm"},
    { name: "Casa Manila", image: "Landmarks/HistoricalAndCulturalSites/CasaManila/CasaManila-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/CasaManila/CasaManila.htm"},
    { name: "Daraga Church", image: "Landmarks/HistoricalAndCulturalSites/DaragaChurch/DaragaChurch-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/DaragaChurch/DaragaChurch.htm"},
    { name: "Diplomat Hotel", image: "Landmarks/HistoricalAndCulturalSites/DiplomatHotel/DiplomatHotel-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/DiplomatHotel/DiplomatHotel.htm"},
    { name: "El Fraile Island", image: "Landmarks/HistoricalAndCulturalSites/ElFraileIsland/ElFraileIsland-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/ElFraileIsland/ElFraileIsland.htm"},
    { name: "Fort San Pedro", image: "Landmarks/HistoricalAndCulturalSites/FortSanPedro/FortSanPedro-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/FortSanPedro/FortSanPedro.htm"},
    { name: "Fort Santiago", image: "Landmarks/HistoricalAndCulturalSites/FortSantiago/FortSantiago-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/FortSantiago/FortSantiago.htm"},
    { name: "Jose Rizal Shrine", image: "Landmarks/HistoricalAndCulturalSites/JoseRizalShrine/JoseRizalShrine-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/JoseRizalShrine/JoseRizalShrine.htm"},
    { name: "Mactan Shrine", image: "Landmarks/HistoricalAndCulturalSites/MactanShrine/MactanShrine-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/MactanShrine/MactanShrine.htm"},
    { name: "National Museum", image: "Landmarks/HistoricalAndCulturalSites/NationalMuseum/NationalMuseum-03.png", path: "Landmarks/HistoricalAndCulturalSites/NationalMuseum/NationalMuseum.htm"},
    { name: "Paoay Church", image: "Landmarks/HistoricalAndCulturalSites/PaoayChurch/PaoayChurch-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/PaoayChurch/PaoayChurch.htm"},
    { name: "Plaza Cuartel", image: "Landmarks/HistoricalAndCulturalSites/PlazaCuartel/PlazaCuartel-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/PlazaCuartel/PlazaCuartel.htm"},
    { name: "Quiapo Church", image: "Landmarks/HistoricalAndCulturalSites/QuiapoChurch/QuiapoChurch-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/QuiapoChurch/QuiapoChurch.htm"},
    { name: "Rizal Park", image: "Landmarks/HistoricalAndCulturalSites/RizalPark/RizalPark-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/RizalPark/RizalPark.htm"},
    { name: "San Agustin Church", image: "Landmarks/HistoricalAndCulturalSites/SanAgustinChurch/SanAgustinChurch-03.jpg", path: "Landmarks/HistoricalAndCulturalSites/SanAgustinChurch/SanAgustinChurch.htm"},
    { name: "Bud Bongao", image: "Landmarks/LakesAndMountains/BudBongao/BudBongao-03.jpg", path: "Landmarks/LakesAndMountains/BudBongao/BudBongao.htm"},
    { name: "Caliraya Lake", image: "Landmarks/LakesAndMountains/CalirayaLake/CalirayaLake-03.jpg", path: "Landmarks/LakesAndMountains/CalirayaLake/CalirayaLake.htm"},
    { name: "Lake Balinsasayao", image: "Landmarks/LakesAndMountains/LakeBalinsasayao/LakeaBalinsasayao-03.jpg", path: "Landmarks/LakesAndMountains/LakeBalinsasayao/LakeBalinsasayao.htm"},
    { name: "Lake Holon", image: "Landmarks/LakesAndMountains/LakeHolon/LakeHolon-03.jpg", path: "Landmarks/LakesAndMountains/LakeHolon/LakeHolon.htm"},
    { name: "Lake Sebu", image: "Landmarks/LakesAndMountains/LakeSebu/LakeSebu-03.jpg", path: "Landmarks/LakesAndMountains/LakeSebu/LakeSebu.htm"},
    { name: "Mayon Volcano", image: "Landmarks/LakesAndMountains/MayonVolcano/MayonVolcano-03.jpg", path: "Landmarks/LakesAndMountains/MayonVolcano/MayonVolcano.htm"},
    { name: "Mount Apo", image: "Landmarks/LakesAndMountains/MountApo/MountApo-03.jpg", path: "Landmarks/LakesAndMountains/MountApo/MountApo.htm"},
    { name: "Mount Arayat", image: "Landmarks/LakesAndMountains/MountArayat/MountArayat-03.jpg", path: "Landmarks/LakesAndMountains/MountArayat/MountArayat.htm"},
    { name: "Mount Balagbag", image: "Landmarks/LakesAndMountains/MountBalagbag/MountBalagbag-03.jpg", path: "Landmarks/LakesAndMountains/MountBalagbag/MountBalagbag.htm"},
    { name: "Mount Guiting-Guiting", image: "Landmarks/LakesAndMountains/MountGuitingGuiting/MountGuitingGuiting-03.jpg", path: "Landmarks/LakesAndMountains/MountGuitingGuiting/MountGuitingGuiting.htm"},
    { name: "Mount Halcon", image: "Landmarks/LakesAndMountains/MountHalcon/MountHalcon-03.jpg", path: "Landmarks/LakesAndMountains/MountHalcon/MountHalcon.htm"},
    { name: "Mount Hamiguitan", image: "Landmarks/LakesAndMountains/MountHamiguitan/MountHamiguitan-03.jpg", path: "Landmarks/LakesAndMountains/MountHamiguitan/MountHamiguitan.htm"},
    { name: "Mount Hibokhibok", image: "Landmarks/LakesAndMountains/MountHibokHibbok/MountHibokHibbok-03.jpg", path: "Landmarks/LakesAndMountains/MountHibokHibbok/MountHibokHibbok.htm"},
    { name: "Mount Kanlaon", image: "Landmarks/LakesAndMountains/MountKanlaon/MountKanlaon-03.jpg", path: "Landmarks/LakesAndMountains/MountKanlaon/MountKanlaon.htm"},
    { name: "Mount Kitanglad", image: "Landmarks/LakesAndMountains/MountKitanglad/MountKitanglad-03.jpg", path: "Landmarks/LakesAndMountains/MountKitanglad/MountKitanglad.htm"},
    { name: "Mount Makiling", image: "Landmarks/LakesAndMountains/MountMakiling/MountMakiling-03.jpg", path: "Landmarks/LakesAndMountains/MountMakiling/MountMakiling.htm"},
    { name: "Mount Pinatubo", image: "Landmarks/LakesAndMountains/MountPinatubo/MountPinatubo-03.jpg", path: "Landmarks/LakesAndMountains/MountPinatubo/MountPinatubo.htm"},
    { name: "Mount Pulag", image: "Landmarks/LakesAndMountains/MountPulag/MountPulag-03.jpg", path: "Landmarks/LakesAndMountains/MountPulag/MountPulag.htm"},
    { name: "Sumlang Lake", image: "Landmarks/LakesAndMountains/SumlangLake/SumlangLake-03.jpg", path: "Landmarks/LakesAndMountains/SumlangLake/SumlangLake.htm"},
    { name: "Taal Volcano", image: "Landmarks/LakesAndMountains/TaalVolcano/TaalVolcano-03.jpg", path: "Landmarks/LakesAndMountains/TaalVolcano/TaalVolcano.htm"},
    { name: "Aguinid Falls", image: "Landmarks/WaterFalls/AguinidFalls/AguinidFalls-03.jpg", path: "Landmarks/WaterFalls/AguinidFalls/AguinidFalls.htm"},
    { name: "Aliwagwag Falls", image: "Landmarks/WaterFalls/AliwagwagFalls/AliwagwagFalls-03.jpg", path: "Landmarks/WaterFalls/AliwagwagFalls/AliwagwagFalls.htm"},
    { name: "Asik-Asik Falls", image: "Landmarks/WaterFalls/AsikAsikFalls/AsikAsikFalls-03.jpg", path: "Landmarks/WaterFalls/AsikAsikFalls/AsikAsikFalls.htm"},
    { name: "Bolinao Falls", image: "Landmarks/WaterFalls/BolinaoFalls/BolinaoFalls-03.jpg", path: "Landmarks/WaterFalls/BolinaoFalls/BolinaoFalls.htm"},
    { name: "Cambugahay Falls", image: "Landmarks/WaterFalls/CambugahayFalls/CambugahayFalls-03.jpg", path: "Landmarks/WaterFalls/CambugahayFalls/CambugahayFalls.htm"},
    { name: "Casaroro Falls", image: "Landmarks/WaterFalls/CasaroroFalls/CasaroroFalls-02.jpg", path: "Landmarks/WaterFalls/CasaroroFalls/CasaroroFalls.htm"},
    { name: "Daranak Falls", image: "Landmarks/WaterFalls/DaranakFalls/DaranakFalls-03.jpg", path: "Landmarks/WaterFalls/DaranakFalls/DaranakFalls.htm"},
    { name: "Hinulugang Taktak", image: "Landmarks/WaterFalls/HinulugangTaktak/HinulugangTaktak-03.jpg", path: "Landmarks/WaterFalls/HinulugangTaktak/HinulugangTaktak.htm"},
    { name: "Kaparkan falls", image: "Landmarks/WaterFalls/KaparkanFalls/KaparkanFalls-03.png", path: "Landmarks/WaterFalls/KaparkanFalls/KaparkanFalls.htm"},
    { name: "Kawasan Falls", image: "Landmarks/WaterFalls/KawasanFalls/KawasanFalls-03.jpg", path: "Landmarks/WaterFalls/KawasanFalls/KawasanFalls.htm"},
    { name: "Lugnason Falls", image: "Landmarks/WaterFalls/LugnasonFalls/LugnasonFalls-03.jpg", path: "Landmarks/WaterFalls/LugnasonFalls/LugnasonFalls.htm"},
    { name: "Maria Cristina Falls", image: "Landmarks/WaterFalls/MariaCristinaFalls/MariaCristinaFalls-03.jpg", path: "Landmarks/WaterFalls/MariaCristinaFalls/MariaCristinaFalls.htm"},
    { name: "Pagsanjan Falls", image: "Landmarks/WaterFalls/PagsanjanFalls/PagsanjanFalls-03.jpg", path: "Landmarks/WaterFalls/PagsanjanFalls/PagsanjanFalls.htm"},
    { name: "Pulangbato Falls", image: "Landmarks/WaterFalls/PulangbatoFalls/PulangbatoFalls-03.jpg", path: "Landmarks/WaterFalls/PulangbatoFalls/PulangbatoFalls.htm"},
    { name: "Tangadan Falls", image: "Landmarks/WaterFalls/TangadanFalls/TangadanFalls-03.jpg", path: "Landmarks/WaterFalls/TangadanFalls/TangadanFalls.htm"},
    { name: "Tappiyah Falls", image: "Landmarks/WaterFalls/TappiyahFalls/TappiyahFalls-03.jpg", path: "Landmarks/WaterFalls/TappiyahFalls/TappiyahFalls.htm"},
    { name: "Tinago Falls", image: "Landmarks/WaterFalls/TinagoFalls/TinagoFalls-03.jpg", path: "Landmarks/WaterFalls/TinagoFalls/TinagoFalls.htm"},
    { name: "Tinuy-an Falls", image: "Landmarks/WaterFalls/Tinuy-anFalls/Tinuy-anFalls-03.jpg", path: "Landmarks/WaterFalls/Tinuy-anFalls/Tinuy-anFalls.htm"},
    { name: "Tumalog Falls", image: "Landmarks/WaterFalls/TumalogFalls/TumalogFalls-03.jpg", path: "Landmarks/WaterFalls/TumalogFalls/TumalogFalls.htm"}
];

const searchState = {
    selectedIndex: -1,
    currentResults: [],
    isNavigatingWithKeyboard: false
};

document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById("searchBox");
    searchBox.focus();

    let searchTimeout;
    searchBox.addEventListener("input", function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (!searchState.isNavigatingWithKeyboard) {
                performSearch();
            }
        }, 100);
    });

    // Handle keyboard navigation
    searchBox.addEventListener("keydown", function(event) {
        const resultsDiv = document.getElementById("searchResults");
        if (resultsDiv.style.display === "none") return;

        switch (event.key) {
            case "ArrowDown":
                event.preventDefault();
                searchState.isNavigatingWithKeyboard = true;
                navigateResults(1);
                break;

            case "ArrowUp":
                event.preventDefault();
                searchState.isNavigatingWithKeyboard = true;
                navigateResults(-1);
                break;

            case "Enter":
                event.preventDefault();
                const selectedItem = getSelectedItem();
                if (selectedItem) {
                    window.location.href = selectedItem.path;
                } else if (searchState.currentResults.length > 0) {
                    window.location.href = searchState.currentResults[0].path;
                }
                break;

            case "Escape":
                resultsDiv.style.display = "none";
                searchBox.blur();
                break;

            default:
                searchState.isNavigatingWithKeyboard = false;
        }
    });

    searchBox.addEventListener("keyup", function(event) {
        if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
            searchState.isNavigatingWithKeyboard = false;
        }
    });

    document.addEventListener("click", function(event) {
        if (!event.target.closest("#searchContainer")) {
            document.getElementById("searchResults").style.display = "none";
        }
    });
});

function performSearch() {
    const input = document.getElementById("searchBox").value.toLowerCase().trim();
    const resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = "";

    if (input === "") {
        resultsDiv.style.display = "none";
        searchState.currentResults = [];
        searchState.selectedIndex = -1;
        return;
    }

    // Filter matching files
    searchState.currentResults = files.filter(file => 
        file.name.toLowerCase().includes(input)
    );

    searchState.selectedIndex = searchState.currentResults.length > 0 ? 0 : -1;

    renderResults();
    resultsDiv.style.display = searchState.currentResults.length ? "block" : "none";
}

function renderResults() {
    const resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = "";

    searchState.currentResults.forEach((file, index) => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("search-result-item");
        if (index === searchState.selectedIndex) {
            resultItem.classList.add("selected");
        }

        const img = document.createElement("img");
        img.src = file.image;
        img.alt = file.name;
        img.classList.add("search-result-img");

        const link = document.createElement("a");
        link.href = file.path;
        link.textContent = file.name;

        resultItem.appendChild(img);
        resultItem.appendChild(link);

        // Handle click
        resultItem.addEventListener("click", function() {
            window.location.href = file.path;
        });

        // Handle hover (no interrupt to navigation)
        resultItem.addEventListener("mouseenter", function() {
            if (!searchState.isNavigatingWithKeyboard) {
                searchState.selectedIndex = index;
                renderResults();
            }
        });

        resultsDiv.appendChild(resultItem);
    });

    scrollToSelectedItem();
}

function navigateResults(direction) {
    if (searchState.currentResults.length === 0) return;

    const newIndex = searchState.selectedIndex + direction;
    if (newIndex >= 0 && newIndex < searchState.currentResults.length) {
        searchState.selectedIndex = newIndex;
        renderResults();
    }
}

function scrollToSelectedItem() {
    if (searchState.selectedIndex >= 0) {
        const selected = document.querySelector(".search-result-item.selected");
        if (selected) {
            selected.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
    }
}

function getSelectedItem() {
    if (searchState.selectedIndex >= 0 && searchState.selectedIndex < searchState.currentResults.length) {
        return searchState.currentResults[searchState.selectedIndex];
    }
    return null;
}

function toggleNavbar() {
    document.getElementById("navbar-menu").classList.toggle("active");
    }