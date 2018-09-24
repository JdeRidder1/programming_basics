var mark;
var grade;

mark = prompt( "Please input the mark" );
mark = parseInt( mark, 10 );


if( mark > 9 )
{
grade = "uitmuntend";
}
else if( mark > 7 )
{
grade = "goed";
}
else if( mark > 6 )
{
grade = "voldoende";
}
else if( mark < 6 )
{
grade = "onvoldoende";
}
