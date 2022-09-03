export const textBookContent = () => `<div class="main">
<div class="main-container">
					<div class="container textbook-container">
						<div class="chapters">
							<div class="chapters-container">
								<div class="chapters-title">Выберите раздел</div>
								<div class="chapters">
								<ul class="chapters-group-list" id="chapters-list">
									<li class="chapters-group-list-title active-group" id="0">A1</li>
									<li class="chapters-group-list-title" id="1">A2</li>
									<li class="chapters-group-list-title" id="2">B1</li>
									<li class="chapters-group-list-title" id="3">B2</li>
									<li class="chapters-group-list-title" id="4">C1</li>
									<li class="chapters-group-list-title" id="5">C2</li>
								</ul>
								<div class="group-range">
									<div class="group-range-title">Begginer</div>
									<div class="group-range-title">Intermediate</div>
									<div class="group-range-title">Advanced</div>
									<div class="group-range-title" id="hard-word">Сложные слова</div>
								</div>
							</div>
							</div>
						</div>
						<div class="main-word-block">
							<div class="main-word-block-container">
								<div class="main-word-block-title">Слова</div>
								<div id="main-word-container" class="main-word-container"></div>
								<div id="main-word-review" class="main-word-review"></div>
							</div>
						</div>
						<ul id="pagination" class="pagination"></ul>
					</div>
				</div>
</div>`