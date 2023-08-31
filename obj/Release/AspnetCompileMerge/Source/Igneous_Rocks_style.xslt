<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl"
>
<xsl:output method="html"/>
<xsl:template match="/">
<html>
<head>          
  <link rel="stylesheet" type="text/css" href="style_all.css" />
  <script type="text/javascript" src="script_all.js"></script>
</head>
<body>
  <xml id="Igneous_Rocks" src="Igneous_Rocks.xml"></xml>
  <table class="xmltbl" border="1">            
    <tr class="xmltr">
      <th class="xmlth">Name</th>
      <th class="xmlth">Type</th>
    </tr>
    <xsl:for-each select="Igneous/rock">              
              
    <xsl:sort select="name"/>              
    <tr class="xmltr">

    <xsl:choose>                  

    <xsl:when test="type = 'Intrusive'">                  
      <td bgcolor="green" color="yellow" class="xmltdintru"><xsl:value-of select="name"/></td>
      <td bgcolor="green" color="yellow" class="xmltdintru"><xsl:value-of select="type"/></td>      
    </xsl:when>
    
  <xsl:when test="type = 'Extrusive'">
    <td class="xmltdextru"><xsl:value-of select="name"/></td>
    <td class="xmltdextru"><xsl:value-of select="type"/></td>    
  </xsl:when>
    
  <xsl:otherwise>
    <td class="xmltd"><xsl:value-of select="name"/></td>
    <td class="xmltd"><xsl:value-of select="type"/></td>
  </xsl:otherwise>      
      
  </xsl:choose>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
