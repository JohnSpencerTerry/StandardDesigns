# StandardDesigns
LESS components used to build quick, consistent web components. 

Currently, files are broken into two groups: base_ and components_

<h3>Base_</h3>

These are simple base modules from which components can be created. 

Files starting with an underscore, such as _colors.less, contain styling which are used by other base components.

All other files in base_ strive to do their respective tasks with minimal side effects while covering as many style
configurations as possible. Through modulating styles in this manner, we can achieve a more consistent visual and, replacing
or extending base modules requires minimal refractoring.

<h3>Components_</h3>

These are components created from base modules and additional stylings which form final, or near final, widgets and components
for creating web interfaces. As much as possible, components should simply contain a list of base mixins which create the component's
look. In doing so, managing a visual consistency becomes much more managable. 

