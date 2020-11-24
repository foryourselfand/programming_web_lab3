package controller;

import model.Point;

import java.util.Arrays;
import java.util.List;

public class InputValidator {
	private static final List<Double> yValues = Arrays.asList(- 3.0, - 2.0, - 1.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0);
	
	public static boolean isPointValid(Point point) {
		return isXValid(point.getX()) &&
				isYValid(point.getY()) &&
				isRValid(point.getR())
				;
	}
	
	public static boolean isXValid(double x) {
		return x >= - 3 &&
				x <= 3;
	}
	
	public static boolean isYValid(double y) {
		return yValues.contains(y);
	}
	
	public static boolean isRValid(double r) {
		if ((r < 2) || (r > 5))
			return false;
		
		for (int rCurrent = 20; rCurrent <= 50; rCurrent++)
			if (rCurrent == (int) r * 10)
				return true;
		return false;
	}
}

