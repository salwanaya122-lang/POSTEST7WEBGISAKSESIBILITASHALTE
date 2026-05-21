var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_KecamatanGenteng_1 = new ol.format.GeoJSON();
var features_KecamatanGenteng_1 = format_KecamatanGenteng_1.readFeatures(json_KecamatanGenteng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanGenteng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanGenteng_1.addFeatures(features_KecamatanGenteng_1);
var lyr_KecamatanGenteng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanGenteng_1, 
                style: style_KecamatanGenteng_1,
                popuplayertitle: 'Kecamatan Genteng',
                interactive: true,
                title: '<img src="styles/legend/KecamatanGenteng_1.png" /> Kecamatan Genteng'
            });
var format_KelurahanGenteng_2 = new ol.format.GeoJSON();
var features_KelurahanGenteng_2 = format_KelurahanGenteng_2.readFeatures(json_KelurahanGenteng_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KelurahanGenteng_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelurahanGenteng_2.addFeatures(features_KelurahanGenteng_2);
var lyr_KelurahanGenteng_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelurahanGenteng_2, 
                style: style_KelurahanGenteng_2,
                popuplayertitle: 'Kelurahan Genteng ',
                interactive: true,
    title: 'Kelurahan Genteng <br />\
    <img src="styles/legend/KelurahanGenteng_2_0.png" /> Embong Kaliasin<br />\
    <img src="styles/legend/KelurahanGenteng_2_1.png" /> Genteng<br />\
    <img src="styles/legend/KelurahanGenteng_2_2.png" /> Kapasari<br />\
    <img src="styles/legend/KelurahanGenteng_2_3.png" /> Ketabang<br />\
    <img src="styles/legend/KelurahanGenteng_2_4.png" /> Peneleh<br />' });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_3.png" /> Jalan'
            });
var format_Servicearea400meter_4 = new ol.format.GeoJSON();
var features_Servicearea400meter_4 = format_Servicearea400meter_4.readFeatures(json_Servicearea400meter_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearea400meter_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea400meter_4.addFeatures(features_Servicearea400meter_4);
var lyr_Servicearea400meter_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearea400meter_4, 
                style: style_Servicearea400meter_4,
                popuplayertitle: 'Service area 400 meter',
                interactive: true,
                title: '<img src="styles/legend/Servicearea400meter_4.png" /> Service area 400 meter'
            });
var format_Halte_5 = new ol.format.GeoJSON();
var features_Halte_5 = format_Halte_5.readFeatures(json_Halte_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_5.addFeatures(features_Halte_5);
var lyr_Halte_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_5, 
                style: style_Halte_5,
                popuplayertitle: 'Halte ',
                interactive: true,
                title: '<img src="styles/legend/Halte_5.png" /> Halte '
            });
var format_Halteterjangkauperkelurahan_6 = new ol.format.GeoJSON();
var features_Halteterjangkauperkelurahan_6 = format_Halteterjangkauperkelurahan_6.readFeatures(json_Halteterjangkauperkelurahan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halteterjangkauperkelurahan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halteterjangkauperkelurahan_6.addFeatures(features_Halteterjangkauperkelurahan_6);
var lyr_Halteterjangkauperkelurahan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halteterjangkauperkelurahan_6, 
                style: style_Halteterjangkauperkelurahan_6,
                popuplayertitle: 'Halte terjangkau per kelurahan',
                interactive: true,
                title: '<img src="styles/legend/Halteterjangkauperkelurahan_6.png" /> Halte terjangkau per kelurahan'
            });

lyr_Positron_0.setVisible(true);lyr_KecamatanGenteng_1.setVisible(true);lyr_KelurahanGenteng_2.setVisible(true);lyr_Jalan_3.setVisible(true);lyr_Servicearea400meter_4.setVisible(true);lyr_Halte_5.setVisible(true);lyr_Halteterjangkauperkelurahan_6.setVisible(true);
var layersList = [lyr_Positron_0,lyr_KecamatanGenteng_1,lyr_KelurahanGenteng_2,lyr_Jalan_3,lyr_Servicearea400meter_4,lyr_Halte_5,lyr_Halteterjangkauperkelurahan_6];
lyr_KecamatanGenteng_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', });
lyr_KelurahanGenteng_2.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'luas_m2': 'luas_m2', });
lyr_Jalan_3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_Servicearea400meter_4.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_Halte_5.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Foto': 'Foto', });
lyr_Halteterjangkauperkelurahan_6.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'luas_m2': 'luas_m2', });
lyr_KecamatanGenteng_1.set('fieldImages', {'full_id': '', 'Kecamatan': '', 'Kelurahan': '', });
lyr_KelurahanGenteng_2.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'luas_m2': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'width': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'railway': 'TextEdit', 'layer': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'smoothness': 'TextEdit', });
lyr_Servicearea400meter_4.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Halte_5.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Halteterjangkauperkelurahan_6.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'luas_m2': '', });
lyr_KecamatanGenteng_1.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', });
lyr_KelurahanGenteng_2.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'luas_m2': 'no label', });
lyr_Jalan_3.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_Servicearea400meter_4.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Halte_5.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'hidden field', 'Sumber': 'no label', });
lyr_Halteterjangkauperkelurahan_6.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Sumber': 'inline label - always visible', 'full_id': 'no label', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'luas_m2': 'inline label - always visible', });
lyr_Halteterjangkauperkelurahan_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});