// premiere render sequence
var project = app.project;
var sequence = project.activeSequence;

app.encoder.launchEncoder();
$.writeln(sequence.name);
$.writeln(File("C:\\Users\\12082\\Documents\\Adobe\\Adobe Media Encoder\\14.0\\Presets\\IG.epr").exists);

app.encoder.encodeSequence(sequence, "C:\\Users\\12082\\Desktop\\test.mp4", "C:\\Users\\12082\\Documents\\Adobe\\Adobe Media Encoder\\14.0\\Presets\\Max Q.epr", 0, true);

app.encoder.startBatch();