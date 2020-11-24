package controller;

import model.Point;

public class AreaResultChecker {
	private AreaResultChecker() {
	}
	
	public static boolean isPointInArea(Point point) {
		return isCoordinatesInArea(point.getX(), point.getY(), point.getR());
	}
	
	public static boolean isCoordinatesInArea(double x, double y, double r) {
		return inFirstQuad(x, y, r) ||
				inSecondQuad(x, y, r) ||
				inFourthQuad(x, y, r)
				;
	}
	
	private static boolean inFirstQuad(double x, double y, double r) {
		return x >= 0 &&
				y >= 0 &&
				x <= r &&
				y <= r / 2
				;
	}
	
	private static boolean inSecondQuad(double x, double y, double r) {
		return x <= 0 &&
				y >= 0 &&
				x >= - r &&
				y <= r / 2 &&
				y <= x / 2 + r / 2
				;
	}
	
	private static boolean inFourthQuad(double x, double y, double r) {
		return x >= 0 &&
				y <= 0 &&
				x * x + y * y <= r * r
				;
	}
}
