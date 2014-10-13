<!DOCTYPE html>
<html>
<head>
<title>Galleri</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
    <meta name="description" content="Your description">
    <meta name="keywords" content="Your keywords">
    <meta name="author" content="Your name">
 	<link rel="stylesheet" href="css/bootstrap.css" type="text/css" media="screen">
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
	<script type="text/javascript" src="js/include_script.js"></script>
  	<!--[if lt IE 9]>
    	
	   	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	    <link href="css/ie.css" rel="stylesheet" type="text/css">
    <![endif]-->
	<link rel="stylesheet" href="css/smoothbox.css" type="text/css" media="screen">
	<style type="text/css">
		
		.clear			{ clear:both; }
		.photo-link		{ padding:5px; margin:5px; border:1px solid #ccc; display:block; width:200px; float:left; }
		.photo-link:hover	{ border-color:#999; }
		
	</style>
	
	<script type="text/javascript" src="js/mootools-1.2.4.js"></script>
	<script type="text/javascript" src="js/smoothbox.js"></script>
</head>
<body>
	<div id="wrapper">
		<section>
			<div class="dynamicContent">
 <div class="row">
  
<?php
/* function:  generates thumbnail */

$desired_width;
function make_thumb($src,$dest,$desired_height) {
	/* read the source image */
	$source_image = imagecreatefromjpeg($src);
	$width = imagesx($source_image);
	$height = imagesy($source_image);
	/* find the "desired height" of this thumbnail, relative to the desired width  */
	$desired_width = floor($width*($desired_height/$height));
	/* create a new, "virtual" image */
	$virtual_image = imagecreatetruecolor($desired_width,$desired_height);
	/* copy source image at a resized size */
	imagecopyresized($virtual_image,$source_image,0,0,0,0,$desired_width,$desired_height,$width,$height);
	/* create the physical thumbnail image to its destination */
	imagejpeg($virtual_image,$dest);
}

/* function:  returns files from dir */
function get_files($images_dir,$exts = array('jpg')) {
	$files = array();
	if($handle = opendir($images_dir)) {
		while(false !== ($file = readdir($handle))) {
			$extension = strtolower(get_file_extension($file));
			if($extension && in_array($extension,$exts)) {
				$files[] = $file;
			}
		}
		closedir($handle);
	}
	return $files;
}

/* function:  returns a file's extension */
function get_file_extension($file_name) {
	return substr(strrchr($file_name,'.'),1);
}

/** settings **/
$images_dir = 'preload-images/';
$thumbs_dir = 'preload-images-thumbs/';
$thumbs_width = 200;
$thumbs_height = 180;
$images_per_row = 3;

/** generate photo gallery **/
$image_files = get_files($images_dir);
if(count($image_files)) {
	$index = 0;
	foreach($image_files as $index=>$file) {
		$index++;
		$thumbnail_image = $thumbs_dir.$file;
		if(!file_exists($thumbnail_image)) {
			$extension = get_file_extension($thumbnail_image);
			if($extension) {
				make_thumb($images_dir.$file,$thumbnail_image,$thumbs_height);
			}
		}
		
		
		
		echo '<div class="span4"><a href="',$images_dir.$file,'" class="thumbnail" rel="gallery"><img data-src="holder.js/',$desired_width,'x180" style="height: 180px; display: block;" src="',$thumbnail_image,'" /></a></div>';
		
	}
	
}
else {
	echo '<p>There are no images in this gallery.</p>';
}
?>
					
				
              </div>
		</section>
	</div>
	<script type="text/javascript" src="js/bootstrap.js"></script>

</body>
</html>