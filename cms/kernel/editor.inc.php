<?php

require_once(dirname(__FILE__).'/prog/header.inc.php');

if (!isset($_GET['id']))
	exit(0);

$id = intval($_GET['id']);

$res = sql_query('SELECT e_text FROM sb_editor WHERE e_id=?d', $id);
if ($res)
{
	list($html) = $res[0];
	sql_query('DELETE FROM sb_editor WHERE e_id=?d', $id);

	//чистим код от инъекций
	$html = preg_replace('/(.*?)\{\s*?\$\s*?\{.*?\}\s*?\}(.*?)/imsu', '$1$2', $html);
	$html = preg_replace('/(.*?)\$\s*?\{.*?\}(.*?)/imsu', '$1$2', $html);


	eval(' ?>'.$html.'<?php ');
}

?>