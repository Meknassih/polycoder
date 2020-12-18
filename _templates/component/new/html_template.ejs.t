---
to: src/components/<%= h.inflection.dasherize(name.toLowerCase()) %>.html
---
<div class="row">
    <div class="col-12">
        Component <%= h.inflection.camelize(name, true) %> works !
    </div>
</div>