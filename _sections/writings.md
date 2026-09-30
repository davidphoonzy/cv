---
title: Writings
slug: writings
order: 2
---

<div class="writings-container">
    {% for writing in site.section-writings %} 
        <article class="writings-card">
            <a href = "{{ writing.external_url | relative_url }}" target="_blank" rel="noopener">
                {% if writing.image %}
                    <div class="writings-card-image" style="background-image: url('{{ writing.image }}');" role="img" aria-label=" {{ writing.image_attribution }}">
                    </div>
                {% endif %}
                <div class="writings-card-title"><h3>{{ writing.title }}</h3></div>
                <div class="writings-card-des"><p>{{ writing.description }}</p></div>
                <div class="writings-card-page">{{ writing.pages }} pages</div>
            </a>
        </article>
    {% endfor %}
 </div>
