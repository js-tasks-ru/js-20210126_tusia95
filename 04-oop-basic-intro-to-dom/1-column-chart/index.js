
export default class ColumnChart {
  constructor({data = [], label = '', link = '', value = 0} = {}) {
    this.data = data;
    this.label = label;
    this.link = link;
    this.value = value;
    this.render();
    this.initEventListeners();
  }

  getColumnProps(someData) {
    const maxValue = Math.max(...someData);
    const scale = 50 / maxValue;

    return someData.map(item => {
      return {
        percent: (item / maxValue * 100).toFixed(0) + '%',
        value: String(Math.floor(item * scale))
      };
    });
  }

  chartHeight = 50;

  render() {
    const element = document.createElement('div');

    if (this.data.length == 0) {
      element.innerHTML = `
    <div class="column-chart column-chart_loading" style="--chart-height: ${this.chartHeight}">
      <div class="column-chart__title">
        Total ${this.label}
        <a class="column-chart__link" href="${this.link}">View all</a>
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">
          ${this.value}
        </div>
        <div data-element="body" class="column-chart__chart">
            <img src="charts-skeleton.svg" alt="Empty data chart">
        </div>
      </div>
    </div>
  </div>`
    } else {
      element.innerHTML = `
      <div class="dashboard__chart_${this.label}">
    <div class="column-chart" style="--chart-height: ${this.chartHeight}">
      <div class="column-chart__title">
        Total ${this.label}
        <a href="/${this.link}" class="column-chart__link">View all</a>
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.value}</div>
        <div data-element="body" class="column-chart__chart">
        ${ this.getColumnProps(this.data).map((objValue) =>
        `<div style="--value: ${objValue.value}" data-tooltip="${objValue.percent}"></div>`).join(``)}
          </div>
        </div>
      </div>
    </div>
`;
    }
    // NOTE: в этой строке мы избавляемся от обертки-пустышки в виде `div`
    // который мы создали на строке 7
    this.element = element.firstElementChild;

  }

  initEventListeners() {
    // NOTE: в данном методе добавляем обработчики событий, если они есть
  }

  remove() {
    this.element.remove();
  }

  update(data) {
    this.data = data;
    this.render();
  }


  destroy() {
    this.remove();
    // NOTE: удаляем обработчики событий, если они есть
  }
}


