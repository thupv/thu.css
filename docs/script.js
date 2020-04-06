const sampleCollection = [
  {
    title: 'texts',
    showCode: false,
    code: `<span class="thu-text is-primary">Primary</span>
<span class="thu-text is-success">Success</span>
<span class="thu-text is-warning">Warning</span>
<span class="thu-text is-error">Error</span>
<span class="thu-text is-disabled">Disabled</span>`,
  },
  {
    title: 'buttons',
    showCode: false,
    code: `<a class="thu-btn" href="#">Normal</a>

<button type="button" class="thu-btn is-primary">Primary</button>
<button type="button" class="thu-btn is-success">Success</button>
<button type="button" class="thu-btn is-warning">Warning</button>
<button type="button" class="thu-btn is-error">Error</button>
<button type="button" class="thu-btn is-disabled">Disabled</button>

<label class="thu-btn">
  <span>Select file</span>
  <input type="file">
</label>`,
  },
  {
    title: 'radios',
    showCode: false,
    code: `
      <label>
        <input name="group1" type="radio" checked />
        <span>Red</span>
      </label>
      <label>
        <input name="group1" type="radio" />
        <span>Yellow</span>
      </label>
      <label>
        <input class="with-gap" name="group1" type="radio"  />
        <span>Green</span>
      </label>
      <label>
        <input name="group1" type="radio" disabled="disabled" />
        <span>Brown</span>
      </label>
`,
  },
  {
    title: 'checkboxes',
    showCode: false,
    code: `<label>
  <input type="checkbox" class="thu-checkbox" checked />
  <span>Enable</span>
</label>
`,
  },
  {
    title: 'inputs (WIP)',
    showCode: false,
    code: `<div class="thu-field">
  <input type="text" id="name_field" class="thu-input" placeholder="Your name">
</div>

<div class="thu-field">
  <label for="inline_field">.is-success</label>
  <input type="text" id="inline_field" class="thu-input is-success" placeholder="Your text">
</div>

<div class="thu-field">
  <label for="warning_field">.is-warning</label>
  <input type="text" id="warning_field" class="thu-input is-warning" placeholder="Your text">
</div>

<div class="thu-field">
  <label for="error_field">.is-error</label>
  <input type="text" id="error_field" class="thu-input is-error" placeholder="Your text">
</div>
`,
  },
  {
    title: 'textarea (WIP)',
    showCode: false,
    code: `<label for="textarea_field">Textarea</label>
<textarea id="textarea_field" class="thu-textarea"></textarea>`,
  },
  {
    title: 'selects (WIP)',
    showCode: false,
    code: `<label for="default_select">Default select</label>
<div class="thu-select">
  <select required id="default_select">
    <option value="" disabled selected hidden>Select...</option>
    <option value="0">To be</option>
    <option value="1">Not to be</option>
  </select>
</div>

<label for="success_select">thu-select.is-success</label>
<div class="thu-select is-success">
  <select required id="success_select">
    <option value="" disabled selected hidden>Select...</option>
    <option value="0">To be</option>
    <option value="1">Not to be</option>
  </select>
</div>

<label for="warning_select">thu-select.is-warning</label>
<div class="thu-select is-warning">
  <select required id="warning_select">
    <option value="" disabled selected hidden>Select...</option>
    <option value="0">To be</option>
    <option value="1">Not to be</option>
  </select>
</div>

<label for="error_select">thu-select.is-error</label>
<div class="thu-select is-error">
  <select required id="error_select">
    <option value="" disabled selected hidden>Select...</option>
    <option value="0">To be</option>
    <option value="1">Not to be</option>
  </select>
</div>
`,
  },
  {
    title: 'containers (WIP)',
    showCode: false,
    code: `<div class="thu-container with-title is-centered">
  <p class="title">Container.is-centered</p>
  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
</div>

<div class="thu-container is-dark with-title">
  <p class="title">Container.is-dark</p>
  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
</div>

<div class="thu-container is-rounded">
  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
</div>

<div class="thu-container is-rounded is-dark">
  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
</div>`,
  },
  {
    title: 'lists (WIP)',
    showCode: false,
    code: `<div class="lists">
  <ul class="thu-list is-disc">
    <li>Good morning.</li>
    <li>Thou hast had a good night's sleep, I hope.</li>
    <li>Thou hast had a good afternoon</li>
    <li>Good night.</li>
  </ul>
</div>

<div class="lists">
  <ul class="thu-list is-circle">
    <li>Good morning.</li>
    <li>Thou hast had a good night's sleep, I hope.</li>
    <li>Thou hast had a good afternoon</li>
    <li>Good night.</li>
  </ul>
</div>

<section class="thu-container is-dark">
  <div class="lists">
    <ul class="thu-list is-disc is-dark">
      <li>Good morning.</li>
      <li>Thou hast had a good night's sleep, I hope.</li>
      <li>Thou hast had a good afternoon</li>
      <li>Good night.</li>
    </ul>
  </div>

  <div class="lists">
    <ul class="thu-list is-circle is-dark">
      <li>Good morning.</li>
      <li>Thou hast had a good night's sleep, I hope.</li>
      <li>Thou hast had a good afternoon</li>
      <li>Good night.</li>
    </ul>
  </div>
</section>`,
  },
  {
    title: 'tables (WIP)',
    showCode: false,
    code: `<div class="thu-table-responsive">
  <table class="thu-table is-bordered is-centered">
    <thead>
      <tr>
        <th>Table.is-bordered</th>
        <th>Table.is-centered</th>
        <th>Table.is-centered</th>
        <th>Table.is-centered</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Thou hast had a good morning</td>
        <td>Thou hast had a good afternoon</td>
        <td>Thou hast had a good evening</td>
        <td>Thou hast had a good night</td>
      </tr>
      <tr>
        <td>Thou hast had a good morning</td>
        <td>Thou hast had a good afternoon</td>
        <td>Thou hast had a good evening</td>
        <td>Thou hast had a good night</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="thu-table-responsive">
  <table class="thu-table is-bordered is-dark">
    <thead>
      <tr>
        <th>Table.is-dark</th>
        <th>Table.is-bordered</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Thou hast had a good morning</td>
        <td>Thou hast had a good afternon</td>
      </tr>
      <tr>
        <td>Thou hast had a good morning</td>
        <td>Thou hast had a good afternoon</td>
      </tr>
    </tbody>
  </table>
</div>`,
  },
  {
    title: 'progress (WIP)',
    showCode: false,
    code: `<progress class="thu-progress" value="90" max="100"></progress>
<progress class="thu-progress is-primary" value="80" max="100"></progress>
<progress class="thu-progress is-success" value="50" max="100"></progress>
<progress class="thu-progress is-warning" value="30" max="100"></progress>
<progress class="thu-progress is-error" value="10" max="100"></progress>
<progress class="thu-progress is-pattern" value="50" max="100"></progress>`,
  },
];

new Vue({
  el: '#thucss',
  data() {
    return {
      collection: sampleCollection,
      copiedBalloon: {
        display: 'none',
        top: 0,
        left: 0,
      },
      scrollPos: 0,
    };
  },
  filters: {
    capitalize(val) {
      if (!val) return '';
      val = val.toString();
      return val.charAt(0).toUpperCase() + val.slice(1);
    },
  },
  mounted() {
    document.addEventListener('scroll', () => {
      this.scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    });
    this.replaceImages();
  },
  methods: {
    copy(event, id) {
      this.showCopiedBalloon(event.pageY, event.pageX);

      const fake = document.createElement('textarea');
      fake.value = this.collection.find(a => a.title === id).code;
      fake.setAttribute('readonly', '');
      Object.assign(fake.style, {
        position: 'absolute',
        left: '-9999px',
      });
      this.$el.appendChild(fake);
      fake.select();
      document.execCommand('copy');
      this.$el.removeChild(fake);
    },
    startAnimate() {
      this.animateOctocat = true;
    },
    stopAnimate() {
      this.animateOctocat = false;
    },
    showCopiedBalloon(top, left) {
      this.copiedBalloon = {
        display: 'block',
        top: `${top - 100}px`,
        left: `${left - 180}px`,
      };
      setTimeout(() => {
        this.copiedBalloon.display = 'none';
      }, 1000);
    },
    replaceImages() {
      Array.from(document.querySelectorAll('img.lazy')).forEach((img) => {
        img.onload = () => img.classList.remove('lazy');
        img.src = img.dataset.src;
      });
    },
  },
});
